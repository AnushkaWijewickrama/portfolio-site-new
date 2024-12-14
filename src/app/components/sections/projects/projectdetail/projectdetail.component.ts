import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "../../../sidebar/sidebar.component";
import { ProjectData } from '../../../../shared/model/projectData.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pagedetail',
  standalone: true,
  imports: [SidebarComponent, NgIf, NgFor],
  templateUrl: './projectdetail.component.html'
})
export class ProjectdetailComponent implements OnInit {
  // List of images for the slider
  images: any = ['projects/projectdetails/1.jpg', 'projects/projectdetails/2.jpg', 'projects/projectdetails/3.jpg']; // Add your image paths here
  currentImageIndex: number = 0;
  projectsData: ProjectData[] = [
    {
      code: "Nostalgia_Portrait_Copy",
      title: "Artify Illustrations",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "Workoholic_City_Design",
      title: "ABC Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "Zoo_Keeper_Envelope",
      title: "FIJ Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "Nostalgia_Portrait",
      title: "DXY Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "Nostalgia_Portrait_Copy1",
      title: "XYZ Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    }
  ];
  selectedProjectData: ProjectData = {}

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((res: any) => {
      this.projectsData.forEach((data => {
        if (data?.code === res?.code) {
          this.selectedProjectData = data
        }
      }))
    })
  }
  // Go to the previous image
  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.images.length - 1;
    }
  }

  // Go to the next image
  nextImage(): void {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

}
