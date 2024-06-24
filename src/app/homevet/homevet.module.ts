import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomevetRoutingModule } from './homevet-routing.module';
import { HomevetComponent } from './homevet.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { RecordatoriosComponent } from './componentes/recordatorios/recordatorios.component';
import { TareasComponent } from './componentes/tareas/tareas.component';


@NgModule({
  declarations: [
    HomevetComponent,
    ConsultasComponent,
    RecordatoriosComponent,
    TareasComponent
  ],
  imports: [
    CommonModule,
    HomevetRoutingModule
  ],
  exports: [
    HomevetComponent
  ]
})
export class HomevetModule { }
