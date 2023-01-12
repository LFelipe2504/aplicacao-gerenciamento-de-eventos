import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './components/pages/home/home.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedoresComponent } from './components/pages/fornecedores/fornecedores.component';
import { CardapioComponent } from './components/pages/cardapio/cardapio.component';
import { EventosComponent } from './components/pages/eventos/eventos.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { FormularioFornecedoresComponent } from './components/formularios/formulario-fornecedores/formulario-fornecedores.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up-imagens/pop-up.component';
import { EditFornecedoresComponent } from './components/pages/edit/edit-fornecedores/edit-fornecedores.component';
import { FormularioFuncionariosComponent } from './components/formularios/formulario-funcionarios/formulario-funcionarios.component';
import { EditFuncionariosComponent } from './components/pages/edit/edit-funcionarios/edit-funcionarios.component';
import { EditUsuariosComponent } from './components/pages/edit/edit-usuarios/edit-usuarios.component';
import { FormularioUsuariosComponent } from './components/formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioEventosComponent } from './components/formularios/formulario-eventos/formulario-eventos.component';
import { EditEventosComponent } from './components/pages/edit/edit-eventos/edit-eventos.component';
import { EditComidasComponent } from './components/pages/edit/edit-comidas/edit-comidas.component';
import { EditBebidasComponent } from './components/pages/edit/edit-bebidas/edit-bebidas.component';
import { FormularioComidasComponent } from './components/formularios/formulario-comidas/formulario-comidas.component';
import { FormularioBebidasComponent } from './components/formularios/formulario-bebidas/formulario-bebidas.component';
import { FormularioAgendamentosComponent } from './components/formularios/formulario-agendamentos/formulario-agendamentos.component';
import { EditAgendamentosComponent } from './components/pages/edit/edit-agendamentos/edit-agendamentos.component';
import { AgendamentosComponent } from './components/pages/agendamentos/agendamentos.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuncionariosComponent,
    FornecedoresComponent,
    CardapioComponent,
    EventosComponent,
    UsuariosComponent,
    FormularioFornecedoresComponent,
    PopUpComponent,
    EditFornecedoresComponent,
    FormularioFuncionariosComponent,
    EditFuncionariosComponent,
    EditUsuariosComponent,
    FormularioUsuariosComponent,
    FormularioEventosComponent,
    EditEventosComponent,
    EditComidasComponent,
    EditBebidasComponent,
    FormularioComidasComponent,
    FormularioBebidasComponent,
    FormularioAgendamentosComponent,
    EditAgendamentosComponent,
    AgendamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
