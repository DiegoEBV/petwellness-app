import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { RecordatorioDuenioResponse } from '../interfaces/recordatorioduenio-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  private baseUrl: string = environment.apiUrl;
  
  private http = inject(HttpClient);

  addRecordatorio(recordatorioduenio: RecordatorioDuenioResponse): Observable<RecordatorioDuenioResponse> {
    const url = `${this.baseUrl}/appointmentsduenio`;
    return this.http.post<RecordatorioDuenioResponse>(url, recordatorioduenio);
  }

}
