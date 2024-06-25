import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomevetRoutingModule } from './homevet-routing.module';
import { HomevetComponent } from './homevet.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { RecordatoriosComponent } from './componentes/recordatorios/recordatorios.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AddRecordatoriosComponent } from './componentes/add-recordatorios/add-recordatorios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomevetComponent,
    ConsultasComponent,
    RecordatoriosComponent,
    TareasComponent,
    AddRecordatoriosComponent,
  ],
  imports: [
    CommonModule,
    HomevetRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
  ],
  exports: [
    HomevetComponent
  ],
})
export class HomevetModule { }
