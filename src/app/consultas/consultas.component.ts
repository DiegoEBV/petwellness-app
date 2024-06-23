import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  tareas = [
    'Revisar los registros médicos de las pacientes',
    'Revisar el formulario de admisión del paciente',
    'Comprobe si hay mensajes nuevos de la paciente',
    'Revisa tus notas de consultas anteriores',
    'Revisar el plan de tratamiento de la paciente',
    'Revisar los medicamentos de la paciente',
    'Revisar los resultados de laboratorio del paciente',
    'Revisar los resultados de las imágenes del paciente',
    'Revisar los signos vitales de la paciente',
    'Revisar los síntomas de la paciente',
    'Revisar las alergias de la paciente',
    'Revisar los antecedentes médicos familiares de la paciente'
  ];

  tareaCompleta: { [key: string]: boolean } = {};
  mostrarMensaje = false;

  constructor(private router: Router) {
    this.tareas.forEach(tarea => this.tareaCompleta[tarea] = false);
  }

  toggleAll(completed: boolean) {
    this.tareas.forEach(tarea => this.tareaCompleta[tarea] = completed);
  }

  iniciarConsulta() {
    if (Object.values(this.tareaCompleta).every(completa => completa)) {
      this.router.navigate(['/videoconsulta']);
    } else {
      this.mostrarMensaje = true;
      setTimeout(() => this.mostrarMensaje = false, 3000); // Ocultar mensaje después de 3 segundos
    }
  }

  finalizarLlamada() {
    this.router.navigate(['/consulta-posterior']); // Navega al nuevo componente
  }
}
