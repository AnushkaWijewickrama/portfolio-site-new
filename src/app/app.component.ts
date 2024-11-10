import { Component } from '@angular/core';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'portfolio-site';
}
