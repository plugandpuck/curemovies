import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  dictionary?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFireDatabase,
    private router: Router) {

    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.object<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      })
  }

  private updateUserData(user) {
    const userRef: AngularFireObject<any> = this.afs.object(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    this.router.navigate(['/']);
    return userRef.update(data);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}