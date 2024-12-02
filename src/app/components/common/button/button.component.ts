import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IButton } from '../../../shared/model/button.model';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgClass],
  styleUrl: './button.component.scss',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() class: IButton
  @Input() title: string = ''
}
