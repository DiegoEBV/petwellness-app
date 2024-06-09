import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';

const routes: Routes = [
  {path: 'homevet', component: HomevetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
