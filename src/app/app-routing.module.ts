import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomevetComponent } from './homevet/homevet.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'homevet', component: HomevetComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'recovery', component: RecoveryComponent},
  {path: 'account-recovery', component: AccountRecoveryComponent},
  {path: 'recuperar-cuenta', component: RecuperarCuentaComponent},
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
