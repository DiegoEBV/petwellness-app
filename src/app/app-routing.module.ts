import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';

const routes: Routes = [
  { path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  { path: 'perfiles', component: PerfilPacienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
