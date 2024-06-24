import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { HistorialMedicoDuenioComponent } from './historial-medico-duenio/historial-medico-duenio.component';
import { PerfilPacienteDuenioComponent } from './perfil-paciente-duenio/perfil-paciente-duenio.component';
import { InformacionGeneralDuenioComponent } from './informacion-general-duenio/informacion-general-duenio.component';
import { NotasConsultaDuenioComponent } from './notas-consulta-duenio/notas-consulta-duenio.component';
import { PlanesAccionDuenioComponent } from './planes-accion-duenio/planes-accion-duenio.component';
import { ArchivosDuenioComponent } from './archivos-duenio/archivos-duenio.component';
import { EstadisticaDuenioComponent } from './estadistica-duenio/estadistica-duenio.component';


const routes: Routes = [
  {path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  { path: 'perfiles', component: PerfilPacienteDuenioComponent },
  { path: 'informacion-general-duenio', component: InformacionGeneralDuenioComponent },
  { path: 'historial-medico-duenio', component: HistorialMedicoDuenioComponent },
  { path: 'notas-consulta-duenio', component: NotasConsultaDuenioComponent },
  { path: 'planes-accion-duenio', component: PlanesAccionDuenioComponent },
  { path: 'archivos-duenio', component: ArchivosDuenioComponent },
  { path: 'estadistica-duenio', component: EstadisticaDuenioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
