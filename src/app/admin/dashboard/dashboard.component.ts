import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.setShowLogout(true);
    this.navbarService.setShowLogin(false);
    this.navbarService.setShowSignup(false);
    this.navbarService.setShowDashboard(true);
    this.navbarService.setShowProfile(false);
    this.navbarService.setShowCart(false);
  }

}
