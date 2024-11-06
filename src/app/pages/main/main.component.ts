import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from 'express';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  activeSection = '';

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    // Observing the visibility of each section
    this.observeSections();
  }

  observeSections() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    this.sections.toArray().forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
