import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgClass],
  styleUrl: './button.component.scss',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() class: string = ''
  @Input() title: string = ''
}
