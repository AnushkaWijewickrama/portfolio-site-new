import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent],
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
