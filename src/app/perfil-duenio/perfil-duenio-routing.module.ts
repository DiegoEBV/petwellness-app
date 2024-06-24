import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilDuenioComponent } from './perfil-duenio.component';
import { HistorialMedicoDuenioComponent } from './componentes/historial-medico-duenio/historial-medico-duenio.component';
import { PerfilPacienteDuenioComponent } from './componentes/perfil-paciente-duenio/perfil-paciente-duenio.component';
import { InformacionGeneralDuenioComponent } from './componentes/informacion-general-duenio/informacion-general-duenio.component';
import { NotasConsultaDuenioComponent } from './componentes/notas-consulta-duenio/notas-consulta-duenio.component';
import { PlanesAccionDuenioComponent } from './componentes/planes-accion-duenio/planes-accion-duenio.component';
import { ArchivosDuenioComponent } from './componentes/archivos-duenio/archivos-duenio.component';
import { EstadisticaDuenioComponent } from './componentes/estadistica-duenio/estadistica-duenio.component';

const routes: Routes = [
  { path: '', component: PerfilDuenioComponent },
  { path: 'perfiles', component: PerfilPacienteDuenioComponent },
  { path: 'informacion-general-duenio', component: InformacionGeneralDuenioComponent },
  { path: 'historial-medico-duenio', component: HistorialMedicoDuenioComponent },
  { path: 'notas-consulta-duenio', component: NotasConsultaDuenioComponent },
  { path: 'planes-accion-duenio', component: PlanesAccionDuenioComponent },
  { path: 'archivos-duenio', component: ArchivosDuenioComponent },
  { path: 'estadistica-duenio', component: EstadisticaDuenioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilDuenioRoutingModule { }
