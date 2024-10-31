import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeaderComponent } from './pages/header/header.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'header', component: HeaderComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
