import { Routes } from '@angular/router';
import { ProjectdetailComponent } from './components/sections/projects/projectdetail/projectdetail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent

    },
    {
        path: ':project', component: ProjectdetailComponent
    },
];
