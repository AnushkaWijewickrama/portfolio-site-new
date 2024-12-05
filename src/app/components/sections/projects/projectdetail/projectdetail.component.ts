import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "../../../sidebar/sidebar.component";
import { ProjectData } from '../../../../shared/model/projectData.model';

@Component({
  selector: 'app-pagedetail',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './projectdetail.component.html',
})
export class ProjectdetailComponent implements OnInit {

  projectsData: ProjectData[] = [
    {
      code: "0001D",
      title: "Artify Illustrations",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "0002D",
      title: "ABC Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "0003D",
      title: "FIJ Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "0004D",
      title: "DXY Company",
      client: "X Pro Inc.",
      date: "12-03-2021",
      projectLink: "https://www.artify.co/vector-illustrations",
      description: "Labore accusam in modo compungi, iacentem substantiales um se sed esse haec."
    },
    {
      code: "0005D",
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

}
