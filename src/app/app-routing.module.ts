import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';
import { SigninComponent } from './signin/signin.component';
import { SecurityComponent } from './security/security.component';
import { SecurityCodeComponent } from './security-code/security-code.component';



const routes: Routes = [
  { path: 'homeduenio', loadChildren: () => import('./homeduenio/homeduenio.module').then(m => m.HomeduenioModule) },
  { path: 'homevet', loadChildren: () => import('./homevet/homevet.module').then(m => m.HomevetModule) },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'security-code', component: SecurityCodeComponent},
  {path: 'recovery', component: RecoveryComponent},
  {path: 'account-recovery', component: AccountRecoveryComponent},
  {path: 'recuperar-cuenta', component: RecuperarCuentaComponent},
  { path: 'perfil-vet', loadChildren: () => import('./perfil-vet/perfil-vet.module').then(m => m.PerfilVetModule) },
  { path: 'perfil-duenio', loadChildren: () => import('./perfil-duenio/perfil-duenio.module').then(m => m.PerfilDuenioModule) },
  { path: 'consultas-vet', loadChildren: () => import('./consultas-vet/consultas-vet.module').then(m => m.ConsultasVetModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
