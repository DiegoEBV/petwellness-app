import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomevetComponent } from './homevet/homevet.component';
import { NotificationNavbarComponent } from './shared/navbar/notification-navbar/notification-navbar.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';
import { SigninComponent } from './signin/signin.component';
import { SecurityComponent } from './security/security.component';
import { SecurityCodeComponent } from './security-code/security-code.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomevetComponent,
    NotificationNavbarComponent,
    LoginComponent,
    RecoveryComponent,
    AccountRecoveryComponent,
    RecuperarCuentaComponent,
    SigninComponent,
    SecurityComponent,
    SecurityCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
