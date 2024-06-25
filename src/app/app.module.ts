import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotificationNavbarComponent } from './shared/navbar/notification-navbar/notification-navbar.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';
import { SigninComponent } from './signin/signin.component';
import { SecurityComponent } from './security/security.component';
import { SecurityCodeComponent } from './security-code/security-code.component';
import { HomeduenioModule } from './homeduenio/homeduenio.module';
import { HttpClientModule } from '@angular/common/http';
import { HomevetModule } from './homevet/homevet.module';
import { PerfilVetModule } from './perfil-vet/perfil-vet.module';
import { PerfilDuenioModule } from './perfil-duenio/perfil-duenio.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConsultasVetModule } from './consultas-vet/consultas-vet.module';
import { TiendaModule } from './tienda/tienda.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
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
    HomeduenioModule,
    HomevetModule,
    HttpClientModule,
    PerfilVetModule,
    PerfilDuenioModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatSlideToggleModule,
    ConsultasVetModule,
    TiendaModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
