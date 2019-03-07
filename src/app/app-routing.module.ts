import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { CustomizedArtComponent } from './customized-art/customized-art.component';
import { CustomizedArtHelpComponent } from './customized-art-help/customized-art-help.component';
import { MyCustomArtComponent } from './my-custom-art/my-custom-art.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import { LoginAuthGuardService } from "./auth/loginAuth.guard";
import { GeneralAuthGuardService } from "./auth/generalAuth.guard";
import {UserDeliveredProductsComponent} from './user-delivered-products/user-delivered-products.component'


const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginAuthGuardService]},
  
  {path: 'profile', component: ProfileComponent},
  {path: 'upload-product', component: ProductUploadComponent, canActivate: [GeneralAuthGuardService]},
  {path: 'profile-page', component: ProfilePageComponent, canActivate: [GeneralAuthGuardService]},
  {path: 'product-view', component: ProductViewComponent},
  {path: 'all-products', component: AllProductsComponent},
  {path: 'cart', component: CartComponent, canActivate: [GeneralAuthGuardService]},
  {path: 'wishlist', component: WishlistComponent, canActivate: [GeneralAuthGuardService]},
  {path: 'paymentGateway', component: PaymentFormComponent, canActivate: [GeneralAuthGuardService]},
  {path: 'customizedart', component: CustomizedArtComponent, canActivate: [GeneralAuthGuardService]},
  {path: 'customizedarthelp', component: CustomizedArtHelpComponent},
  {path: 'mycustomart', component: MyCustomArtComponent, canActivate: [GeneralAuthGuardService]},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'userdelivery', component:UserDeliveredProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
