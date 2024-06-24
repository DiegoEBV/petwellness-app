import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatMenuModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ]

})
export class MaterialModule { }
