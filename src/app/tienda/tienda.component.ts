import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
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

  constructor(private productoService: ProductosService) { }

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
  
}
