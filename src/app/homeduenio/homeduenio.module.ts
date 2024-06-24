import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeduenioRoutingModule } from './homeduenio-routing.module';
import { HomeduenioComponent } from './homeduenio.component';
import { TiendaModule } from '../tienda/tienda.module';
import { AddRecordatoriosDuenioComponent } from './add-recordatorios-duenio/add-recordatorios-duenio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeduenioComponent,
    AddRecordatoriosDuenioComponent
  ],
  imports: [
    CommonModule,
    HomeduenioRoutingModule,
    TiendaModule,
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
    HomeduenioComponent
  ]
})
export class HomeduenioModule { }
