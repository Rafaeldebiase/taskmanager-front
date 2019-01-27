import { Routes, CanActivate } from '@angular/router';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/services/auth.guard';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'areaTrabalho',
    loadChildren: './area-trabalho/area-trabalho.module#AreaTrabalhoModule',
    canActivate: [AuthGuard]
    },
    {path: '', redirectTo: '/login', pathMatch: 'full' }
];
