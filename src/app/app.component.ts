import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',

})
export class AppComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Easing type (optional)
      once: false, // Animation only once (optional)
      mirror: false // No repeat on scroll up (optional)
    });
  }
}
