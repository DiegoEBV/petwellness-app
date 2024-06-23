import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { NotasConsultaComponent } from './notas-consulta/notas-consulta.component';
import { PlanesAccionComponent } from './planes-accion/planes-accion.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

const routes: Routes = [
  { path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  { path: 'perfiles', component: PerfilPacienteComponent },
  { path: 'informacion-general', component: InformacionGeneralComponent },
  { path: 'historial-medico', component: HistorialMedicoComponent },
  { path: 'notas-consulta', component: NotasConsultaComponent },
  { path: 'planes-accion', component: PlanesAccionComponent },
  { path: 'archivos', component: ArchivosComponent },
  { path: 'estadistica', component: EstadisticaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
