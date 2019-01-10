import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './auth/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    this.localStorageService.autoAuthenticateUser();
  }
  
}
