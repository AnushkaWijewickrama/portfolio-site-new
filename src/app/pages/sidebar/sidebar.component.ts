import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavigationService } from '../../shared/util/navigation.service';
import { routerTransition } from '../../shared/util/animations';
import { ContactsComponent } from "../contacts/contacts.component";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { WorksComponent } from "../works/works.component";
import $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, HeaderComponent, RouterOutlet, RouterLink, NgClass, NgStyle, ContactsComponent, HomeComponent, AboutComponent, ExperienceComponent, WorksComponent],
  animations: [
    routerTransition(),
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})


export class SidebarComponent implements OnInit {
  ngOnInit(): void {

    var topSec = document.querySelectorAll(".top");
    console.log(topSec)

    $(window).scroll(() => {
      var topPos: any = $(topSec)?.offset()?.top;
      var topBot = topPos + $(topSec).outerHeight(true);
      if ($(window).scrollTop() > topBot) {
        $(".sidebarNav").addClass("sidebarNavIn");
      }
      else {
        $(".sidebarNav").removeClass("sidebarNavIn");
      }
    });

    var sidebarNavButton = document.querySelectorAll(".sidebarNavItem");
    var sidebarNavSection = document.querySelectorAll(".section");



    //checking for position to turn UX nav button orange

    $(sidebarNavSection).each(function (index: any) {
      var navSec = sidebarNavSection[index];
      var navBut = sidebarNavButton[index];


      $(window).scroll(function () {
        var navPos = $(navSec).offset().top;
        var secBot = navPos + $(navSec).outerHeight(true);

        if ($(this).scrollTop() > navPos && $(this).scrollTop() < secBot) {
          $(navBut).css("background-color", "#cc0000");
        }

        else {
          $(navBut).css("background-color", "initial");
        }
      });


    });


    $(document).ready(() => {
      // Add smooth scrolling to all links
      $(".scrollLink").on('click', function (event: any) {

        // Make sure this.hash has a value before overriding default behavior
        if (this['hash'] !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this['hash'];

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });

  }

}

