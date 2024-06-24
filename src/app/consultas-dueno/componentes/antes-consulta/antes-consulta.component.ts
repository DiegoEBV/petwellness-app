import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antes-consulta',
  templateUrl: './antes-consulta.component.html',
  styleUrl: './antes-consulta.component.css'
})
export class AntesConsultaComponent {
  constructor(private router: Router) { }

  iniciarConsulta(nombrePaciente: string) {
    this.router.navigate(['/video-consulta', nombrePaciente]);
  }
}
