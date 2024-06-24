import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasVetComponent } from './consultas-vet.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { VideoConsultaComponent } from './componentes/video-consulta/video-consulta.component';
import { ConsultaPosteriorComponent } from './componentes/consulta-posterior/consulta-posterior.component';

const routes: Routes = [
  { path: '', component: ConsultasVetComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'videoconsulta', component: VideoConsultaComponent },
  { path: 'consulta-posterior', component: ConsultaPosteriorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasVetRoutingModule { }
