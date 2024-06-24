import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordatoriosComponent } from './componentes/add-recordatorios/add-recordatorios.component';

@Component({
  selector: 'app-homevet',
  templateUrl: './homevet.component.html',
  styleUrls: ['./homevet.component.css']
})
export class HomevetComponent {
  days: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  dates: number[] = [9, 10, 11, 12, 13, 14];
  activeIndex: number = 2;
  selectedTab: string = 'resumen';

  constructor(public dialog: MatDialog) {}

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

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRecordatoriosComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
