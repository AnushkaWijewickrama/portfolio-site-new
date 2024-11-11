import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
