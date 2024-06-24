import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-consulta',
  templateUrl: './video-consulta.component.html',
  styleUrls: ['./video-consulta.component.css']
})
export class VideoConsultaComponent implements OnInit {
  nombrePaciente: string = ''; // Inicializa con una cadena vacía

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nombrePaciente = params['nombrePaciente'];
    });
  }
}
