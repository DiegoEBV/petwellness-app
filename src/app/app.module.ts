import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotificationNavbarComponent } from './shared/navbar/notification-navbar/notification-navbar.component';
import { HomeduenioModule } from './homeduenio/homeduenio.module';
import { HttpClientModule } from '@angular/common/http';
import { HomevetModule } from './homevet/homevet.module';
import { PerfilPacienteDuenioComponent } from './perfil-paciente-duenio/perfil-paciente-duenio.component';
import { HistorialMedicoDuenioComponent } from './historial-medico-duenio/historial-medico-duenio.component';
import { NotasConsultaDuenioComponent } from './notas-consulta-duenio/notas-consulta-duenio.component';
import { PlanesAccionDuenioComponent } from './planes-accion-duenio/planes-accion-duenio.component';
import { ArchivosDuenioComponent } from './archivos-duenio/archivos-duenio.component';
import { EstadisticaDuenioComponent } from './estadistica-duenio/estadistica-duenio.component';
import { InformacionGeneralDuenioComponent } from './informacion-general-duenio/informacion-general-duenio.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotificationNavbarComponent,
    PerfilPacienteDuenioComponent,
    HistorialMedicoDuenioComponent,
    NotasConsultaDuenioComponent,
    PlanesAccionDuenioComponent,
    ArchivosDuenioComponent,
    EstadisticaDuenioComponent,
    InformacionGeneralDuenioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeduenioModule,
    HomevetModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
