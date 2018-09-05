import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { from, Observable } from 'rxjs';
import 'rxjs/add/operator/do';


@Injectable()
export class FirebaseInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (firebase.auth().currentUser) {
            return from(firebase.auth().currentUser.getIdToken(true))
                .switchMap((idToken: string) => {
                    const authHeader = 'Bearer ' + idToken;
                    const authReq = req.clone({
                        headers: req.headers.set('Authorization', authHeader),
                        url: req.url
                    });

                    const started = Date.now();
                    return next
                        .handle(authReq)
                        .do(event => {
                            if (event instanceof HttpResponse) {
                                const elapsed = Date.now() - started;
                                console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                            }
                        }, err => {
                            console.log(err);
                        });
                });
        }
    }
}