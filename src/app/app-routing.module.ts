import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { VideoConsultaComponent } from './video-consulta/video-consulta.component';
import { ConsultaPosteriorComponent } from './consulta-posterior/consulta-posterior.component';

const routes: Routes = [
  { path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'videoconsulta', component: VideoConsultaComponent },
  { path: 'consulta-posterior', component: ConsultaPosteriorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
