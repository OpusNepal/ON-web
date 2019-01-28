import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ImageVerificationComponent } from './image-verification/image-verification.component';

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
