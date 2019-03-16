import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import * as $ from 'jquery';
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

    $(document).ready(function() {
      $(".nav-link").click(function() {
          // Find and remove all div's with classes flag, edit, delete, that may appear after the </div>
          // containing the <span> that was clicked 
          
         $(".loading-splash").remove()
      });
  });
  +function () {
    var intervals = []
  
    intervals.push(setInterval(function () {
      $('.umbel-logo .animated').each(function () {
        this.classList.remove('animated')
        this.offsetHeight
        this.classList.add('animated')
      })
    }, 2000))
  
  
    var appearPhase = true;
    var $text = $('.loading-text')
  
    var togglePhase = function () {
      appearPhase = !appearPhase
    }
  
    intervals.push(setInterval(function () {
      var selector = appearPhase ? '.letter:not(.visible)' : '.letter.visible'
      var $letters = $text.find(selector)
  
      $letters
        .eq(~~(Math.random() * $letters.length))
        .toggleClass('visible', appearPhase)
  
      $letters.length - 1 || setTimeout(togglePhase, 2000)
    }, 300))
    
    function destroy() {
      $('.loading-splash').remove()
      intervals.forEach(function(interval) {
        clearInterval(interval)
      })
    }
    
    $(window).on('loadComplete.um', destroy)
  }()

  }
}