import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-remove-from-car',
  templateUrl: './remove-from-car.component.html',
  styleUrl: './remove-from-car.component.css'
})
export class RemoveFromCarComponent {
  @Input() productId!: number;
  @Output() productRemoved = new EventEmitter<void>();

  constructor(private productosService: ProductosService) {}

  removeProduct(): void {
    this.productosService.removeProduct(this.productId).subscribe(
      () => {
        this.productRemoved.emit();
      },
      (error) => {
        console.error('Error removing product', error);
      }
    );
  }
} 
