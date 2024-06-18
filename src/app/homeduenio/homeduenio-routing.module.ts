import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeduenioComponent } from './homeduenio.component';

const routes: Routes = [{ path: '', component: HomeduenioComponent }, { path: 'tienda', loadChildren: () => import('../tienda/tienda.module').then(m => m.TiendaModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeduenioRoutingModule { }
