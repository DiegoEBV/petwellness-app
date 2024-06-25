import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasVetRoutingModule } from './consultas-vet-routing.module';
import { ConsultasVetComponent } from './consultas-vet.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { VideoConsultaComponent } from './componentes/video-consulta/video-consulta.component';
import { ConsultaPosteriorComponent } from './componentes/consulta-posterior/consulta-posterior.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ConsultasVetComponent,
    ConsultasComponent,
    VideoConsultaComponent,
    ConsultaPosteriorComponent,
  ],
  imports: [
    CommonModule,
    ConsultasVetRoutingModule,
    FormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class ConsultasVetModule { }
