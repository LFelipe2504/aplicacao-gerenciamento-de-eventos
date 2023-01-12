import { EditBebidasComponent } from './components/pages/edit/edit-bebidas/edit-bebidas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedoresComponent } from './components/pages/fornecedores/fornecedores.component';
import { CardapioComponent } from './components/pages/cardapio/cardapio.component';
import { EventosComponent } from './components/pages/eventos/eventos.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { EditFornecedoresComponent } from './components/pages/edit/edit-fornecedores/edit-fornecedores.component';
import { EditFuncionariosComponent } from './components/pages/edit/edit-funcionarios/edit-funcionarios.component';
import { EditEventosComponent } from './components/pages/edit/edit-eventos/edit-eventos.component';
import { EditUsuariosComponent } from './components/pages/edit/edit-usuarios/edit-usuarios.component';
import { EditComidasComponent } from './components/pages/edit/edit-comidas/edit-comidas.component';
import { AgendamentosComponent } from './components/pages/agendamentos/agendamentos.component';
import { EditAgendamentosComponent } from './components/pages/edit/edit-agendamentos/edit-agendamentos.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'funcionarios/edit/:id', component: EditFuncionariosComponent},
  {path:'funcionarios', component: FuncionariosComponent},
  {path:'fornecedores/edit/:id', component: EditFornecedoresComponent},
  {path:'fornecedores', component: FornecedoresComponent},
  {path:'cardapio/bebida/edit/:id', component: EditBebidasComponent},
  {path:'cardapio/comida/edit/:id', component: EditComidasComponent},
  {path:'cardapio', component: CardapioComponent},
  {path:'eventos/edit/:id', component: EditEventosComponent},
  {path:'eventos', component: EventosComponent},
  {path:'usuarios/edit/:id', component: EditUsuariosComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'agendamentos/usuario/:id', component: EditAgendamentosComponent},
  {path:'agendamentos', component: AgendamentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
