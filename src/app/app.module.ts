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
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminModule } from './admin/admin.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FooterComponent } from './footer/footer.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ImageVerificationComponent,
    AccountVerificationComponent,
    SafePipe,
    HomePageComponent,
    ProfileComponent,
    ProfilePageComponent,
    FooterComponent,
    ProductUploadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
