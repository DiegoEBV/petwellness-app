import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasDuenoComponent } from './consultas-dueno.component';
import { ReservarServicioComponent } from './componentes/reservar-servicio/reservar-servicio.component';
import { AntesConsultaComponent } from './componentes/antes-consulta/antes-consulta.component';
import { VideoConsultaComponent } from './componentes/video-consulta/video-consulta.component'; 

const routes: Routes = [{ 
  path: '', component: ConsultasDuenoComponent },
  { path: 'consultas-duenio', component: ReservarServicioComponent },
  { path: 'antes-consulta', component: AntesConsultaComponent },
  { path: 'video-consulta/:nombrePaciente', component: VideoConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasDuenoRoutingModule { }
