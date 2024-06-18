import { ConsultaService } from './../../services/consulta.service';
import { Component } from '@angular/core';
interface Consulta {
  img: string;
  nombre: string;
  fecha: string;
  hora: string;
}
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {
  consultasvet: Consulta[] = [];

  constructor(private ConsultaService: ConsultaService) { }

  ngOnInit() {
    this.loadConsultas();
  }

  loadConsultas() {
    this.ConsultaService.getConsultas().subscribe(data => {
      this.consultasvet = data.map(ConsultaResponse => ({
        img: ConsultaResponse.img,
        nombre: ConsultaResponse.nombre,
        fecha: ConsultaResponse.fecha,
        hora: ConsultaResponse.hora
      }));
    });
  }
}
