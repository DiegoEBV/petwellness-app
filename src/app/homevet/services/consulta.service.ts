import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaResponse } from '../interfaces/conuslta-response.interface';
import { RecordatorioResponse } from '../interfaces/recordatorio-response.interface';
import { TareaResponse } from '../interfaces/tarea-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private baseUrl: string = environment.apiUrl;
  
  private http = inject(HttpClient);
  

  getConsultas()  : Observable<ConsultaResponse[]> {
    const url = `${this.baseUrl}/consultasvet`;
    return this.http.get<ConsultaResponse[]>(url);
  }

  getRecordatorios()  : Observable<RecordatorioResponse[]> {
    const url = `${this.baseUrl}/appointmentsvet`;
    return this.http.get<RecordatorioResponse[]>(url);
  }

  getTareas()  : Observable<TareaResponse[]> {
    const url = `${this.baseUrl}/tasksvet`;
    return this.http.get<TareaResponse[]>(url);
  }

}
