import { NotificationNavbarComponent } from './../shared/navbar/notification-navbar/notification-navbar.component';
import { Component, OnInit, Signal, signal } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { ProductoResponse } from './interfaces/producto-response.interface';
import { ShopRequest } from './interfaces/shop-request.interface';
import { NavbarComponent } from '../shared/navbar/navbar.component';
interface Producto {
  img: string;
  nombre: string;
  precio: string;
}

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos: Producto[] = [];
  message: string = '';
  messageType: string = '';

  constructor(private productoService: ProductosService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productoService.getProducts().subscribe(data => {
      this.productos = data.map(productResponse => ({
        img: productResponse.img,
        nombre: productResponse.nombre,
        precio: productResponse.precio.toString() 
      }));
    });
  }

  addProductToCar(producto: Producto): void {
    const shopRequest: ShopRequest = {
      id: 0,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio
    };

    this.productoService.ShopRequest(shopRequest).subscribe({
      next: (response: ShopRequest) => {
        this.showMessage('Producto añadido exitosamente al carrito', 'success');
      },
      error: (error) => {
        console.error('Error al añadir producto al carrito:', error);
        this.showMessage('Error al añadir producto al carrito. Por favor, intenta de nuevo.', 'error');
      }
    });
  }

  showMessage(message: string, type: string): void {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.message = '';
      this.messageType = '';
    }, 3000);
  }
  
}
