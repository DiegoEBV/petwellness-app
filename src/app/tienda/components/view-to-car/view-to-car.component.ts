import { ProductosService } from './../../services/productos.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ShopRequest } from '../../interfaces/shop-request.interface';
import { ShopResponse } from '../../interfaces/shop-response.interface';

@Component({
  selector: 'app-view-to-car',
  templateUrl: './view-to-car.component.html',
  styleUrl: './view-to-car.component.css'
})
export class ViewToCarComponent {
  shops: ShopRequest[] = [];
  @Output() closeCart = new EventEmitter<void>();
  @Output() productCount = new EventEmitter<number>();

  constructor(private ProductosService: ProductosService) {}

  ngOnInit(): void {
    this.getCarProducts();
  }

  getCarProducts(): void {
    this.ProductosService.getShops().subscribe(
      (data: ShopResponse[]) => {
        this.shops = data;
        this.productCount.emit(this.shops.length);
      },
      (error) => {
        console.error('Error fetching cart products', error);
      }
    );
  }
  goToCheckout(): void {
    window.location.href = 'homeduenio';
  }

  continueShopping(): void {
    this.closeCart.emit();
  }
}
