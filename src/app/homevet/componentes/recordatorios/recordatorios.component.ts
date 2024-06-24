import { ConsultaService } from './../../services/consulta.service';
import { Component } from '@angular/core';
interface Recordatorio {
  id: number;
  name: string;
  time: string;
  icon: string;
}
@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrl: './recordatorios.component.css'
})
export class RecordatoriosComponent {
  appointmentsvet: Recordatorio[] = [];

  constructor(private ConsultaService: ConsultaService) { }

  ngOnInit() {
    this.loadRecordatorios();
  }

  loadRecordatorios() {
    this.ConsultaService.getRecordatorios().subscribe(data => {
      this.appointmentsvet = data.map(RecordatorioResponse => ({
        id: RecordatorioResponse.id,
        name: RecordatorioResponse.name,
        time: RecordatorioResponse.time,
        icon: RecordatorioResponse.icon
      }));
    });
  }
}
