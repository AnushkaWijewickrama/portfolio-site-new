import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "../../../sidebar/sidebar.component";
import { ProjectData } from '../../../../shared/model/projectData.model';
import { NgFor } from '@angular/common';
import AOS from 'aos';


@Component({
  selector: 'app-pagedetail',
  standalone: true,
  imports: [SidebarComponent, NgFor],
  templateUrl: './projectdetail.component.html'
})
export class ProjectdetailComponent implements OnInit {
  currentIndex = 0;
  selectedId: string = ''
  projectsData: ProjectData[] = [
    {
      code: "Nostalgia_Portrait_Copy",
      title: "Artify Illustrations",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.",
      projectType: 'abc',
      images: ['projects/projectdetails/1.jpg', 'projects/projectdetails/2.jpg', 'projects/projectdetails/3.jpg'],
      team: 'Anushka',
    },
    {
      code: "Workoholic_City_Design",
      title: "ABC Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.",
      projectType: 'abc',
      images: ['projects/projectdetails/1.jpg', 'projects/projectdetails/2.jpg', 'projects/projectdetails/3.jpg'],
      team: 'Anushka',


    },
    {
      code: "Zoo_Keeper_Envelope",
      title: "Anushka Project",
      client: "X Pro Inc.",
      date: "12-03-2024",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Most databases, text processing functions and data transfer protocols default to the English alphabet. Testing software applications with only English looking text, like Lorem Ipsum, may not reveal potential mismatches between different parts of the application or ensure that the font can display all necessary characters. Additionally, in today's globalized world, it is likely that your application will be used by people from different countries and languages. Even if you designed your application to be English-only, users with names from other languages may want their names to be displayed properly.",
      projectType: 'Adventure',
      images: ['projects/projectdetails/1.jpg', 'projects/projectdetails/2.jpg', 'projects/projectdetails/3.jpg'],
      team: 'Anushka Team',


    },
    {
      code: "Nostalgia_Portrait",
      title: "DXY Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.",
      projectType: 'abc',
      images: ['projects/projectdetails/1.jpg', 'projects/projectdetails/2.jpg', 'projects/projectdetails/3.jpg'],
      team: 'Anushka',


    },
    {
      code: "Nostalgia_Portrait_Copy1",
      title: "XYZ Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.",
      projectType: 'abc',
      images: ['projects/projectdetails/1.jpg', 'projects/projectdetails/2.jpg', 'projects/projectdetails/3.jpg'],
      team: 'Anushka',

    }
  ];
  selectedProjectData: ProjectData = {}
  slideConfig = {
    slidesToShow: 1,
    nav: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slideSpeed: 100,
    loop: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      400: {
        items: 1,
        dots: false,
      },
      450: {
        items: 2,
        dots: false,
      },
      740: {
        items: 4,
        dots: false,
      },
      940: {
        items: 4,
        dots: false,
      }
    },

  }
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Easing type (optional)
      once: false, // Animation only once (optional)
      mirror: false // No repeat on scroll up (optional)
    });
    this.router.params.subscribe((res: any) => {
      this.projectsData.forEach((data => {
        if (data?.code === res?.project) {
          this.selectedProjectData = data
          console.log(data)
        }
      }))
    })
  }
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.selectedProjectData.images.length;
    console.log('asdd')
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.selectedProjectData.images.length) % this.selectedProjectData.images.length;
  }
}
