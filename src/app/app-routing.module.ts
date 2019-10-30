import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembretesComponent } from './paginas/editar-lembretes/editar-lembretes.component';

const routes: Routes = [
  {path: '', component: ListaLembreteComponent},
  {path: 'lembrete/criar', component: CriarLembreteComponent},
  {path: 'lembrete/editar/:id', component: EditarLembretesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
