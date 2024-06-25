import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasDuenoRoutingModule } from './consultas-dueno-routing.module';
import { ConsultasDuenoComponent } from './consultas-dueno.component';
import { ReservarServicioComponent } from './componentes/reservar-servicio/reservar-servicio.component';
import { FormsModule } from '@angular/forms';
import { AntesConsultaComponent } from './componentes/antes-consulta/antes-consulta.component';
import { MatIconModule } from '@angular/material/icon';
import { VideoConsultaComponent } from './componentes/video-consulta/video-consulta.component';

@NgModule({
  declarations: [
    ConsultasDuenoComponent,
    ReservarServicioComponent,
    AntesConsultaComponent,
    VideoConsultaComponent,
  ],
  imports: [
    CommonModule,
    ConsultasDuenoRoutingModule,
    FormsModule,
    MatIconModule,
  ]
})
export class ConsultasDuenoModule { }
