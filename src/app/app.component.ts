import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './auth/local-storage.service';
import { MatSpinner } from '@angular/material';
import { Spinkit } from 'ng-http-loader'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ;
  public matSpinner = MatSpinner;
  public spinkit = Spinkit; // <============


  constructor(public localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    this.localStorageService.autoAuthenticateUser();
  }
  
}
