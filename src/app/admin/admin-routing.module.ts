import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ImageVerificationComponent } from './image-verification/image-verification.component';
import { AdminService } from './admin.service'

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
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminRoutingModule { }
