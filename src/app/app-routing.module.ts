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
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'upload-product', component: ProductUploadComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: 'product-view', component: ProductViewComponent},
  {path: 'all-products', component: AllProductsComponent},
  {path: 'wishlist', component: WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
