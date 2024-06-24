import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { HistorialMedicoVetComponent } from './historial-medico-vet/historial-medico-vet.component';
import { PerfilPacienteVetComponent } from './perfil-paciente-vet/perfil-paciente-vet.component';
import { InformacionGeneralVetComponent } from './informacion-general-vet/informacion-general-vet.component';
import { NotasConsultaVetComponent } from './notas-consulta-vet/notas-consulta-vet.component';
import { PlanesAccionVetComponent } from './planes-accion-vet/planes-accion-vet.component';
import { ArchivosVetComponent } from './archivos-vet/archivos-vet.component';
import { EstadisticaVetComponent } from './estadistica-vet/estadistica-vet.component';

const routes: Routes = [
  {path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  { path: 'perfiles', component: PerfilPacienteVetComponent },
  { path: 'informacion-general-vet', component: InformacionGeneralVetComponent },
  { path: 'historial-medico-vet', component: HistorialMedicoVetComponent },
  { path: 'notas-consulta-vet', component: NotasConsultaVetComponent },
  { path: 'planes-accion-vet', component: PlanesAccionVetComponent },
  { path: 'archivos-vet', component: ArchivosVetComponent },
  { path: 'estadistica-vet', component: EstadisticaVetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
