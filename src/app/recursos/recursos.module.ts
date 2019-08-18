import { NgModule, ModuleWithProviders } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CriatarefaComponent } from './criatarefa/criatarefa.component';
import { BarraferramentaComponent } from './barraferramenta/barraferramenta.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule,
            MatButtonModule,
            MatFormFieldModule,
            MatMenuModule,
            MatInputModule,
            MatIconModule,
            MatExpansionModule,
            MatCardModule,
            MatCheckboxModule,
            MatDatepickerModule,
            NativeDateModule,
            MAT_DATE_LOCALE,
            MAT_CHECKBOX_CLICK_ACTION,
        } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { AuthGuard } from '../services/auth.guard';
import { IronService } from '../services/iron.service';
import { IronPolicyFactory } from '../services/iron/iron-policy-factory';
import { TarefaService } from '../services/tarefa.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../interceptor/token.interceptor';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { IronHttpInterceptor } from '../interceptor/ironhttp.interceptor';
import { RodapeComponent } from './rodape/rodape.component';
import { UsuarioService } from '../services/usuario.service';
import { MatMomentDateModule, MomentDateModule} from '@angular/material-moment-adapter';
import { AreaTrabalhoService } from '../services/area-trabalho.service';





@NgModule({
    declarations: [CardComponent, CriatarefaComponent,
        BarraferramentaComponent, RodapeComponent],
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatInputModule,
        MatIconModule,
        MatExpansionModule,
        MatCardModule,
        DragDropModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MomentDateModule,
        NativeDateModule
    ],
    exports: [CardComponent, CriatarefaComponent, BarraferramentaComponent, RodapeComponent,
        CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule,
        MatInputModule, MatButtonModule, MatDatepickerModule, MatMomentDateModule, MomentDateModule,
        NativeDateModule]
})
export class RecursosModule {
    static forRoots(): ModuleWithProviders {
        return {
            ngModule: RecursosModule,
            providers: [
                AuthService,
                StorageService,
                AuthGuard,
                IronService,
                IronPolicyFactory,
                TarefaService,
                UsuarioService,
                AreaTrabalhoService,
                {
                    provide: MAT_DATE_LOCALE,
                    useValue: 'pt-BR',
                },
                {
                    provide: MAT_CHECKBOX_CLICK_ACTION,
                    useValue: 'check'
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: IronHttpInterceptor,
                    multi: true
                }
            ]
        };
    }

}
