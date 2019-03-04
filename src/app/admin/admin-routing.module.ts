import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ImageVerificationComponent } from './image-verification/image-verification.component';
import { CurrentArtistComponent } from './current-artist/current-artist.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { DeliveredArtsComponent } from './delivered-arts/delivered-arts.component';
import { NotDeliveredArtsComponent } from './not-delivered-arts/not-delivered-arts.component';
import { GeneralAuthGuardService } from "../auth/generalAuth.guard";
import {AllDeliveredProductComponent} from './all-delivered-product/all-delivered-product.component';
import {AllUndeliveredProductComponent} from './all-undelivered-product/all-undelivered-product.component';


const routes: Routes = [
  {
    path:'admin',
    component: DashboardComponent,
    canActivate: [GeneralAuthGuardService],
    children: [
      {
        path: 'verifyaccount',
        component: AccountVerificationComponent
      },
      {
        path: 'verifyimage',
        component: ImageVerificationComponent
      },
      {
        path: 'currentartists',
        component: CurrentArtistComponent
      },
      {
        path: 'addcategory',
        component: AddCategoryComponent
      },
      {
        path: 'addsubcategory',
        component: AddSubcategoryComponent
      },
      {
        path: 'deliveredarts',
        component: DeliveredArtsComponent
      },
      {
        path: 'notdeliveredarts',
        component: NotDeliveredArtsComponent
      },
      {
        path: 'alldeliveredproduct',
        component: AllDeliveredProductComponent
      },
      {
        path: 'allundeliveredproduct',
        component: AllUndeliveredProductComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
