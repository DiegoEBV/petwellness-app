import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilVetRoutingModule } from './perfil-vet-routing.module';
import { PerfilVetComponent } from './perfil-vet.component';
import { PerfilPacienteVetComponent } from './componentes/perfil-paciente-vet/perfil-paciente-vet.component';
import { HistorialMedicoVetComponent } from './componentes/historial-medico-vet/historial-medico-vet.component';
import { NotasConsultaVetComponent } from './componentes/notas-consulta-vet/notas-consulta-vet.component';
import { PlanesAccionVetComponent } from './componentes/planes-accion-vet/planes-accion-vet.component';
import { ArchivosVetComponent } from './componentes/archivos-vet/archivos-vet.component';
import { EstadisticaVetComponent } from './componentes/estadistica-vet/estadistica-vet.component';
import { InformacionGeneralVetComponent } from './componentes/informacion-general-vet/informacion-general-vet.component';

@NgModule({
  declarations: [
    PerfilVetComponent,
    PerfilPacienteVetComponent,
    HistorialMedicoVetComponent,
    NotasConsultaVetComponent,
    PlanesAccionVetComponent,
    ArchivosVetComponent,
    EstadisticaVetComponent,
    InformacionGeneralVetComponent,
  ],
  imports: [
    CommonModule,
    PerfilVetRoutingModule
  ]
})
export class PerfilVetModule { }
