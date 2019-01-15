import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { BarraferramentaComponent } from './barraferramenta/barraferramenta.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaTrabalhoComponent,
    LoginComponent,
    BarraferramentaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
