import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
