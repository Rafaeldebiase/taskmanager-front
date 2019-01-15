import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatIconModule,
         } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { BarraferramentaComponent } from './barraferramenta/barraferramenta.component';
import { ConexaoApiService } from './conexao-api.service';


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
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [ConexaoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
