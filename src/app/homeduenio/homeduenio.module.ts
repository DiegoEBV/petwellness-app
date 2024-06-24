import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeduenioRoutingModule } from './homeduenio-routing.module';
import { HomeduenioComponent } from './homeduenio.component';
import { TiendaModule } from '../tienda/tienda.module';


@NgModule({
  declarations: [
    HomeduenioComponent
  ],
  imports: [
    CommonModule,
    HomeduenioRoutingModule,
    TiendaModule
  ],
})
export class HomeduenioModule { }
