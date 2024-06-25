import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilDuenioRoutingModule } from './perfil-duenio-routing.module';
import { PerfilDuenioComponent } from './perfil-duenio.component';
import { PerfilPacienteDuenioComponent } from './componentes/perfil-paciente-duenio/perfil-paciente-duenio.component';
import { HistorialMedicoDuenioComponent } from './componentes/historial-medico-duenio/historial-medico-duenio.component';
import { NotasConsultaDuenioComponent } from './componentes/notas-consulta-duenio/notas-consulta-duenio.component';
import { PlanesAccionDuenioComponent } from './componentes/planes-accion-duenio/planes-accion-duenio.component';
import { ArchivosDuenioComponent } from './componentes/archivos-duenio/archivos-duenio.component';
import { EstadisticaDuenioComponent } from './componentes/estadistica-duenio/estadistica-duenio.component';
import { InformacionGeneralDuenioComponent } from './componentes/informacion-general-duenio/informacion-general-duenio.component';

@NgModule({
  declarations: [
    PerfilDuenioComponent,
    PerfilPacienteDuenioComponent,
    HistorialMedicoDuenioComponent,
    NotasConsultaDuenioComponent,
    PlanesAccionDuenioComponent,
    ArchivosDuenioComponent,
    EstadisticaDuenioComponent,
    InformacionGeneralDuenioComponent
  ],
  imports: [
    CommonModule,
    PerfilDuenioRoutingModule,
  ]
})
export class PerfilDuenioModule { }
