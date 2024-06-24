import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet.component';

const routes: Routes = [{ path: '', component: HomevetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomevetRoutingModule { }
