import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ImageVerificationComponent } from './image-verification/image-verification.component';
import { CurrentArtistComponent } from './current-artist/current-artist.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';

const routes: Routes = [
  {
    path:'admin',
    component: DashboardComponent,
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
