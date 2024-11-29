import { Component } from '@angular/core';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { HeroComponent } from "../components/sections/hero/hero.component";
import { AboutComponent } from "../components/sections/about/about.component";
import { ProjectsComponent } from "../components/sections/projects/projects.component";
import { ContactsComponent } from "../components/sections/contacts/contacts.component";
import { NgFor } from '@angular/common';
import { IAboutItems } from '../shared/model/aboutItems.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, HeroComponent, AboutComponent, ProjectsComponent, ContactsComponent, NgFor],
  templateUrl: './main.component.html'
})
export class MainComponent {

  aboutItems: IAboutItems[] = [
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

}
