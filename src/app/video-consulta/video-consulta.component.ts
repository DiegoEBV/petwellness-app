import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-video-consulta',
  templateUrl: './video-consulta.component.html',
  styleUrls: ['./video-consulta.component.css']
})
export class VideoConsultaComponent {
  @Input() pacienteNombre: string = 'George';
  @Input() horaConsulta: string = '9:00 AM';

  constructor(private router: Router) {}
  finalizarLlamada() {
    this.router.navigate(['/consulta-posterior']); // Navega al nuevo componente
  }
}
 