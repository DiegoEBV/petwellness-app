import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar-servicio',
  templateUrl: './reservar-servicio.component.html',
  styleUrls: ['./reservar-servicio.component.css']
})
export class ReservarServicioComponent {
  tipoMascota: string = '';
  modalidad: string = 'virtual';
  tipoCita: string = '';
  fecha: string = '';
  hora: string = '';
  correo: string = '';
  selectedDoctor: string = '';
  errorMessage: string = '';

  onSelectDoctor(doctor: string) {
    this.selectedDoctor = doctor;
  }

  onSubmit() {
    if (this.tipoMascota && this.modalidad && this.tipoCita && this.fecha && this.hora && this.correo && this.selectedDoctor) {
      alert('Registro de cita exitoso');
    } else {
      this.errorMessage = 'Rellene todos los campos';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000); // El mensaje desaparece después de 3 segundos
    }
  }

  constructor(private router: Router) { }

  navigateToAntesConsulta() {
    this.router.navigate(['/antes-consulta']);
  }
}
