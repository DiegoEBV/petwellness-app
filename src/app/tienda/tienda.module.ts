import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './tienda.component';
import { ViewToCarComponent } from './components/view-to-car/view-to-car.component';


@NgModule({
  declarations: [
    TiendaComponent,
    ViewToCarComponent, 
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
  ],
  exports: [
    TiendaComponent,
    ViewToCarComponent,
  ]
})
export class TiendaModule { }
