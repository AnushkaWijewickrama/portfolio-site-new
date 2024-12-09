import { Component } from '@angular/core';
import { IPortfolioItems } from '../../../shared/model/portfolioItems.model';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  portfolioItems: IPortfolioItems[] = [
    {
      title: "Nostalgia Portrait Copy",
      image: "projects/1.jpg",
      format: "SVG",
      formatColor: "bg-orange-500",
      link: "0001D",
      stack: [{ title: 'Angular' }, { title: 'TypeScript' }, { title: 'Bootstrap' }, { title: 'SCSS' }]

    },
    {
      title: "Workoholic City Design",
      image: "projects/2.jpg",
      format: "SVG",
      formatColor: "bg-orange-500",
      link: "0002D",
      stack: [{ title: 'Angular' }, { title: 'TypeScript' }, { title: 'TailwindCSS' }, { title: 'SCSS' }]

    },
    {
      title: "Zoo Keeper Envelope",
      image: "projects/3.jpg",
      format: "PSD",
      formatColor: "bg-blue-500",
      link: "0003D",
      stack: [{ title: 'Angular' }, { title: 'JavaScript' }, { title: 'TailwindCSS' }, { title: 'SCSS' }]

    },
    {
      title: "Nostalgia Portrait",
      image: "projects/4.jpg",
      format: "PNG",
      formatColor: "bg-blue-500",
      link: "0004D",
      stack: [{ title: 'Angular' }, { title: 'TypeScript' }, { title: 'TailwindCSS' }, { title: 'SCSS' }]

    },
    {
      title: "Nostalgia Portrait Copy",
      image: "projects/5.jpg",
      format: "SVG",
      formatColor: "bg-orange-500",
      link: "0005D",
      stack: [{ title: 'Angular' }, { title: 'TypeScript' }, { title: 'TailwindCSS' }, { title: 'SCSS' }]
    }
  ];

}
