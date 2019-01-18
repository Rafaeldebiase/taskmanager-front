import { Routes } from '@angular/router';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'AreaTrabalho', component: AreaTrabalhoComponent},
];
