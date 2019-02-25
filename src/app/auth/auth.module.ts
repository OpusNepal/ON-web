import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { LoginAuthGuardService } from "./loginAuth.guard";
import { GeneralAuthGuardService } from "./generalAuth.guard";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    LoginAuthGuardService,
    GeneralAuthGuardService
  ]
})
export class AuthModule { }
