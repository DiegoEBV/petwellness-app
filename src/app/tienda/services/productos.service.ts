import { ShopRequest } from '../interfaces/shop-request.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../interfaces/producto-response.interface';
import { environment } from '../../../environments/environments';
import { ShopResponse } from '../interfaces/shop-response.interface';

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

  getShops()  : Observable<ShopResponse[]> {
    const url = `${this.apiUrl}/shop`;
    return this.http.get<ShopResponse[]>(url);
  }

  ShopRequest(newShop: ShopRequest) : Observable<ShopRequest> {
    const url = `${this.apiUrl}/shop`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ShopRequest>(url, newShop, { headers });
  }

}
