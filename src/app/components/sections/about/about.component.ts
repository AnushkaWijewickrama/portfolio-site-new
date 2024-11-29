import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AboutDetails } from '../../../shared/model/aboutDetails.model';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  @Input() subTitle: string = ''
  @Input() title: string = ''
  @Input() details: AboutDetails[] = []
}
