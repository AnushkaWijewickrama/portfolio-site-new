import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { num: 1 } },
    { path: 'about', component: AboutComponent, data: { num: 2 } },
    { path: 'experience', component: ExperienceComponent, data: { num: 1 } },
    { path: 'works', component: WorksComponent, data: { num: 2 } },
    { path: 'contact', component: ContactsComponent, data: { num: 2 } },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
