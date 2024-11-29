import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgClass],
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  @Input() buttonTextColor: string = ''
  @Input() buttonBackgroundColor: string = ''
  @Input() buttonCapitalizer: string = ''
  @Input() buttonBordeRadius: string = ''
}
