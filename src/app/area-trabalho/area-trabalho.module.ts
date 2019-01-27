import { AreaTrabalhoComponent } from './area-trabalho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosModule } from '../recursos/recursos.module';

const ROUTES: Routes = [
    {path: '', component: AreaTrabalhoComponent}
];

@NgModule ({
    declarations: [AreaTrabalhoComponent],
    imports: [RouterModule.forChild(ROUTES), RecursosModule]
})
export class AreaTrabalhoModule {

}
