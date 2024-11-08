import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactsComponent } from "../contacts/contacts.component";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { WorksComponent } from "../works/works.component";
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink, NgClass, NgStyle, ContactsComponent, HomeComponent, AboutComponent, ExperienceComponent, WorksComponent, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})


export class SidebarComponent implements OnInit {

  currentSection: number = 1;
  isDarkMode = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

    const menuBtn = document.getElementById('menu-btn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarLinks = document.querySelectorAll('#mobileSidebar .scrollLink');

    menuBtn.addEventListener('click', () => {
      mobileSidebar.classList.toggle('-translate-x-full');
    });

    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileSidebar.classList.add('-translate-x-full');
      });
    })

    this.isDarkMode = localStorage.getItem('theme') === 'dark';

    this.updateDarkMode();
  }
  ngAfterViewInit(): void {
    const topSec = document.querySelector(".top") as HTMLElement | null;

    window.addEventListener("scroll", () => {
      if (topSec) {
        const topPos = topSec.getBoundingClientRect().top + window.pageYOffset;
        const topBot = topPos + topSec.offsetHeight;

        const sidebarNav = document.querySelector(".sidebarNav") as HTMLElement | null;
        if (window.scrollY > topBot) {
          sidebarNav?.classList.add("sidebarNavIn");
        } else {
          sidebarNav?.classList.remove("sidebarNavIn");
        }
      }
    });

    const sidebarNavButtons = Array.from(document.querySelectorAll(".sidebarNavItem")) as HTMLElement[];
    const sidebarNavSections = Array.from(document.querySelectorAll(".section")) as HTMLElement[];

    sidebarNavSections.forEach((navSec, index) => {
      const navBut = sidebarNavButtons[index];

      window.addEventListener("scroll", () => {
        const navPos = navSec.getBoundingClientRect().top + window.pageYOffset;
        const secBot = navPos + navSec.offsetHeight;

        if (window.scrollY > navPos && window.scrollY < secBot) {
          navBut.style.textDecoration = "underline";
        } else {
          navBut.style.textDecoration = "initial";
        }
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      const scrollLinks = Array.from(document.querySelectorAll(".scrollLink")) as HTMLElement[];

      scrollLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          const hash = (link as HTMLAnchorElement).hash;

          if (hash) {
            event.preventDefault();
            const targetElement = document.querySelector(hash) as HTMLElement | null;

            if (targetElement) {
              const topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

              window.scrollTo({
                top: topPosition,
                behavior: "smooth",
              });

              history.pushState(null, "", hash);
            }
          }
        });
      });
    });
  }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const component1 = document.getElementById('section1');
    const component2 = document.getElementById('section2');
    const component3 = document.getElementById('section3');
    const component4 = document.getElementById('section4');
    const component5 = document.getElementById('section5');

    if (component1 && component1.getBoundingClientRect().top < window.innerHeight / 2) {
      this.currentSection = 1;
    }
    if (component2 && component2.getBoundingClientRect().top < window.innerHeight / 2) {
      this.currentSection = 2;
    }
    if (component3 && component3.getBoundingClientRect().top < window.innerHeight / 2) {
      this.currentSection = 3;
    }
    if (component4 && component4.getBoundingClientRect().top < window.innerHeight / 2) {
      this.currentSection = 4;
    }
    if (component5 && component5.getBoundingClientRect().top < window.innerHeight / 2) {
      this.currentSection = 5;
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateDarkMode();
  }

  private updateDarkMode() {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
  toggleSidebar(): void {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebarNavIn');
  }

}

