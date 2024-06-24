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
import { PerfilVetModule } from './perfil-vet/perfil-vet.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotificationNavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeduenioModule,
    HomevetModule,
    HttpClientModule,
    PerfilVetModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
