import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilVetComponent } from './perfil-vet.component';
import { HistorialMedicoVetComponent } from './componentes/historial-medico-vet/historial-medico-vet.component';
import { PerfilPacienteVetComponent } from './componentes/perfil-paciente-vet/perfil-paciente-vet.component';
import { InformacionGeneralVetComponent } from './componentes/informacion-general-vet/informacion-general-vet.component';
import { NotasConsultaVetComponent } from './componentes/notas-consulta-vet/notas-consulta-vet.component';
import { PlanesAccionVetComponent } from './componentes/planes-accion-vet/planes-accion-vet.component';
import { ArchivosVetComponent } from './componentes/archivos-vet/archivos-vet.component';
import { EstadisticaVetComponent } from './componentes/estadistica-vet/estadistica-vet.component';

const routes: Routes = [
  { path: '', component: PerfilVetComponent },
  { path: 'perfiles', component: PerfilPacienteVetComponent },
  { path: 'informacion-general-vet', component: InformacionGeneralVetComponent },
  { path: 'historial-medico-vet', component: HistorialMedicoVetComponent },
  { path: 'notas-consulta-vet', component: NotasConsultaVetComponent },
  { path: 'planes-accion-vet', component: PlanesAccionVetComponent },
  { path: 'archivos-vet', component: ArchivosVetComponent },
  { path: 'estadistica-vet', component: EstadisticaVetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilVetRoutingModule { }
