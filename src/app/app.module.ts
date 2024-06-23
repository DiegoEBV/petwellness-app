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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormsModule } from '@angular/forms';
import { VideoConsultaComponent } from './video-consulta/video-consulta.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConsultaPosteriorComponent } from './consulta-posterior/consulta-posterior.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotificationNavbarComponent,
    ConsultasComponent,
    VideoConsultaComponent,
    ConsultaPosteriorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeduenioModule,
    HomevetModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatSlideToggleModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
