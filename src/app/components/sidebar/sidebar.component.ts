import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { AboutComponent } from "../../pages/about/about.component";
import { ContactsComponent } from "../../pages/contacts/contacts.component";
import { HeroComponent } from "../../pages/hero/hero.component";
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { isMobileResolution } from '../../shared/util/common-util';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [ContactsComponent, HeroComponent, ProjectsComponent, AboutComponent, NgIf, NgFor]
})
export class SidebarComponent implements OnInit {

  currentSection: number = 1;
  isDarkMode: boolean = false;
  aboutItems = [
    {
      subTitle: 'Biodata',
      title: 'Education',
      details: [
        {
          date: '1998 - 2004',
          description: 'Bachelors in Engineering in Information Technology',
          subDescription: 'Harvard School of Science and Management',
        },
        {
          date: '2004 - 2006',
          description: 'Masters in Data Analysis',
          subDescription: 'Harvard School of Science and Management',
        }
      ],

    },
    {
      subTitle: null,
      title: 'Experiences',
      details: [
        {
          date: '2007 - 2012',
          description: 'Creative Agency Inc.: Design Head',
          subDescription: 'Managed creative teams to deliver high-quality designs.',
        },
        {
          date: '2013 - Present',
          description: 'Studio Alpha: Project Manager',
          subDescription: 'Oversee projects ensuring timely delivery and client satisfaction.',
        }
      ],

    },
    {
      subTitle: null,
      title: 'Interests',
      details: [
        {
          date: null,
          description: 'Innovating with Technology',
          subDescription: 'Passionate about leveraging technology for positive change.',
        },
        {
          date: null,
          description: 'Designing Solutions',
          subDescription: 'Love creating innovative solutions to complex problems.',
        },
        {
          date: '1998 - 2004',
          description: 'Bachelors in Engineering in Information Technology',
          subDescription: 'Harvard School of Science and Management',
        }
      ],

    },
    {
      subTitle: null,
      title: 'References',
      details: [
        {
          date: '1998 - 2004',
          description: 'Dr. Stephen H. King',
          subDescription: 'Expert in strategic management and mentorship.',
        },
        {
          date: '2004 - 2006',
          description: 'Dr. David Howard',
          subDescription: 'Renowned professor and career guide in technology.',
        }
      ],

    },
  ];
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
              behavior: "smooth",
            });

            history.pushState(null, "", hash);
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
