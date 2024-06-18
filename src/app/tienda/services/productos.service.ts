import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../interfaces/producto-response.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl: string = environment.apiUrl;
  
  private http = inject(HttpClient);
  

  getProducts()  : Observable<ProductoResponse[]> {
    const url = `${this.apiUrl}/productos`;
    return this.http.get<ProductoResponse[]>(url);
  }

}
