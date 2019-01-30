import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageVerificationComponent } from './image-verification/image-verification.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { AdminService } from './admin.service';
import { AdminRoutingModule } from './admin-routing.module';
import { SafePipe } from './safe.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent,
    ImageVerificationComponent,
    AccountVerificationComponent,
    SafePipe,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
