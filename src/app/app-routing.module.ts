import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
