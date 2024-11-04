import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationService } from '../../shared/util/navigation.service';
import { routerTransition } from '../../shared/util/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, HeaderComponent, RouterOutlet, RouterLink],
  animations: [
    routerTransition(),
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) {
  }

  getRouteAnimation(outlet: any) {
    return this.navigationService.animationValue;
  }

  ngOnInit(): void {
    // this.toggleSidebar()
  }

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('-translate-x-full');
    }
  }
}
