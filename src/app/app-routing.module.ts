import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';


const routes: Routes = [
  {path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  { path: 'perfil-vet', loadChildren: () => import('./perfil-vet/perfil-vet.module').then(m => m.PerfilVetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
