import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  @Input() subTitle: string = ''
  @Input() title: string = ''
  @Input() details: any = []
}
