import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatIconModule,
         MatExpansionModule,
         MatCardModule
         } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { BarraferramentaComponent } from './barraferramenta/barraferramenta.component';
import { ConexaoApiService } from './conexao-api.service';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.router';

import { CriatarefaComponent } from './recursos/criatarefa/criatarefa.component';
import { CardComponent } from './recursos/card/card.component';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    AreaTrabalhoComponent,
    LoginComponent,
    BarraferramentaComponent,
    RodapeComponent,
    CardComponent,
    CriatarefaComponent
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
    MatExpansionModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ConexaoApiService, AuthService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
