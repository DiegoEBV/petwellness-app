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
import { PerfilPacienteVetComponent } from './perfil-paciente-vet/perfil-paciente-vet.component';
import { HistorialMedicoVetComponent } from './historial-medico-vet/historial-medico-vet.component';
import { NotasConsultaVetComponent } from './notas-consulta-vet/notas-consulta-vet.component';
import { PlanesAccionVetComponent } from './planes-accion-vet/planes-accion-vet.component';
import { ArchivosVetComponent } from './archivos-vet/archivos-vet.component';
import { EstadisticaVetComponent } from './estadistica-vet/estadistica-vet.component';
import { InformacionGeneralVetComponent } from './informacion-general-vet/informacion-general-vet.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotificationNavbarComponent,
    PerfilPacienteVetComponent,
    HistorialMedicoVetComponent,
    NotasConsultaVetComponent,
    PlanesAccionVetComponent,
    ArchivosVetComponent,
    EstadisticaVetComponent,
    InformacionGeneralVetComponent,

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
