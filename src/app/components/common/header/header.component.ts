import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title: string = ''
  @Input() subTitle: string = ''
}
