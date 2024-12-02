import { Component } from '@angular/core';
import AOS from 'aos';
import { RouterOutlet } from '@angular/router';

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
      once: true, // Animation only once (optional)
      mirror: false // No repeat on scroll up (optional)
    });
  }
}
