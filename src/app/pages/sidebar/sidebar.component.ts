import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, HeaderComponent, RouterOutlet, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

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
