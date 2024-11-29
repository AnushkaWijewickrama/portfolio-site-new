import { Component } from '@angular/core';
import { ButtonsComponent } from "../../common/buttons/buttons.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

}
