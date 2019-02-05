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
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FooterComponent } from './footer/footer.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { AdminModule } from './admin/admin.module';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    ProfilePageComponent,
    FooterComponent,
    ProductUploadComponent,
    ProductViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    AdminModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
