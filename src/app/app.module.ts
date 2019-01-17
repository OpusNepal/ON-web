import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ImageVerificationComponent } from './admin/image-verification/image-verification.component';
import { AccountVerificationComponent } from './admin/account-verification/account-verification.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SafePipe } from './admin/safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ImageVerificationComponent,
    AccountVerificationComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
