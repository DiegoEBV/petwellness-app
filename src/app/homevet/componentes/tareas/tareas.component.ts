import { ConsultaService } from './../../services/consulta.service';
import { Component } from '@angular/core';
interface Tarea {
  id: number;
  name: string;
  time: string;
  icon: string;
  linkicon: string;
}
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tasksvet: Tarea[] = [];

  constructor(private ConsultaService: ConsultaService) { }

  ngOnInit() {
    this.loadTareas();
  }

  loadTareas() {
    this.ConsultaService.getTareas().subscribe(data => {
      this.tasksvet = data.map(TareaResponse => ({
        id: TareaResponse.id,
        name: TareaResponse.name,
        time: TareaResponse.time,
        icon: TareaResponse.icon,
        linkicon: TareaResponse.linkicon
      }));
    });
  }
}
