import { Component } from '@angular/core';

@Component({
  selector: 'app-homevet',
  templateUrl: './homevet.component.html',
  styleUrl: './homevet.component.css'
})
export class HomevetComponent {
  days: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  dates: number[] = [9, 10, 11, 12, 13, 14];
  activeIndex: number = 2;

  prev(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.dates.length - 1;
    }
  }

  next(): void {
    if (this.activeIndex < this.dates.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }
}
