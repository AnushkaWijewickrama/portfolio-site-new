import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { AboutComponent } from "../../pages/about/about.component";
import { ContactsComponent } from "../../pages/contacts/contacts.component";
import { HeroComponent } from "../../pages/hero/hero.component";
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { isMobileResolution } from '../../shared/util/common-util';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [ContactsComponent, HeroComponent, ProjectsComponent, AboutComponent, NgIf]
})
export class SidebarComponent implements OnInit {

  currentSection: number = 1;
  isDarkMode = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.setupMobileMenuToggle();
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateDarkMode();
  }

  ngAfterViewInit(): void {
    this.setupScrollLinks();
    this.highlightCurrentSection();
  }

  setupMobileMenuToggle(): void {
    const menuBtn = document.getElementById('menu-btn');
    const mobileSidebar = document.getElementById('mobileSidebar');

    if (menuBtn && mobileSidebar) {
      menuBtn.addEventListener('click', () => {
        mobileSidebar.classList.toggle('-translate-x-full');
      });

      // Close sidebar on link click for mobile
      const sidebarLinks = Array.from(mobileSidebar.querySelectorAll('.scrollLink')) as HTMLElement[];
      sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileSidebar.classList.add('-translate-x-full');
        });
      });
    }
  }

  setupScrollLinks(): void {
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
              behavior: "auto",
            });

            location.hash = hash;
          }
        }
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.highlightCurrentSection();
  }

  highlightCurrentSection(): void {
    const sections = [
      { id: 'section1', index: 1 },
      { id: 'section2', index: 2 },
      { id: 'section3', index: 3 },
      { id: 'section4', index: 4 },
      { id: 'section5', index: 5 },
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      const link = document.querySelector(`.scrollLink[href="#${section.id}"]`);

      if (element && link) {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;

        if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
          this.currentSection = section.index;
          link.classList.add("scroll-underline");
        } else {
          link.classList.remove("scroll-underline");
        }
      }
    });
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateDarkMode();
  }

  private updateDarkMode(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
  getIsMobileResolution(): boolean {
    return isMobileResolution();
  }
}
