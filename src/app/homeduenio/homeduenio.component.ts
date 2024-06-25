import { Component, ViewChild, ElementRef } from '@angular/core';
import { AddRecordatoriosDuenioComponent } from './add-recordatorios-duenio/add-recordatorios-duenio.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-homeduenio',
  templateUrl: './homeduenio.component.html',
  styleUrl: './homeduenio.component.css'
})
export class HomeduenioComponent {
  days: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  dates: number[] = [9, 10, 11, 12, 13, 14];
  activeIndex: number = 2;
  selectedTab: string = 'resumen';
  @ViewChild('fileInput') fileInput!: ElementRef;

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

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file);
    }
  }

  appointments = [
    { id: 1, name: 'Consulta con Dr. Jose', time: '09:20 AM - 11:30 AM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nO3WvytFYRjA8eNXGQwUShQDd6AUJUIMNq7xMtjskkyUSaSkmLgJZVNistgsNvEffXS7r5g4x33VTfept+cZzvt+3+fbc04nSWpRDYFhNGIALehGJ9rQh2YMog4jYc9HHv0NsB+beMYJHnGBe9zgGg84xRMO8YIDvIb8hh1Mp4VO4gw57KIXaxjDMhYwi9XQ7RY6cBRMHIdcunAPNrCeBnyOpqB3qaQxs7LyOXOYCPUl6n/aUAx5CCto+CV4HjOh3kd7KnDMwF4a8C0KEdZUmIVx3FV1x8WqAit/QApBXyFtXRHY52uxiHyWulJw7svAZKozg2VUGk21jEqjqVaB3ppq/1J18v2Ze3811eMxwbkMSruigWNGWvBVVGr5zCO0/vRQPvx3FSOu7djN1CJJG++5NFwDQjfIuQAAAABJRU5ErkJggg==' },
    { id: 2, name: 'Vacunación anti-rabica con Dra. Mirella', time: '11:30 AM - 11:50 PM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nO3WvytFYRjA8eNXGQwUShQDd6AUJUIMNq7xMtjskkyUSaSkmLgJZVNistgsNvEffXS7r5g4x33VTfept+cZzvt+3+fbc04nSWpRDYFhNGIALehGJ9rQh2YMog4jYc9HHv0NsB+beMYJHnGBe9zgGg84xRMO8YIDvIb8hh1Mp4VO4gw57KIXaxjDMhYwi9XQ7RY6cBRMHIdcunAPNrCeBnyOpqB3qaQxs7LyOXOYCPUl6n/aUAx5CCto+CV4HjOh3kd7KnDMwF4a8C0KEdZUmIVx3FV1x8WqAit/QApBXyFtXRHY52uxiHyWulJw7svAZKozg2VUGk21jEqjqVaB3ppq/1J18v2Ze3811eMxwbkMSruigWNGWvBVVGr5zCO0/vRQPvx3FSOu7djN1CJJG++5NFwDQjfIuQAAAABJRU5ErkJggg==' },
    { id: 3, name: 'Comprar comida B.A.R.F en Metro', time: '03:00 PM - 04:00 PM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nNWXO04DMRRFBylLoE9NRTGiTJs0oaCBhjZTsgEEu0iRJihiMxSjKWcJUFCmS3MiRzayHH8m5ongK13J8vN9R/OzNVX13wU8AB9AG7Cq3f8GcAssgZXjL+AdaAJWtU9PTvWap6A3wA7YeBp8K0Ak2+g1bm6je9Yx8ALo9Lh23A8A925O1zrVu0qEWz32KQU+kq61sawP/HN7gDfSWlvraynwCLj2PAJjVRuJg09V2WDCm8azlb0z85LgJuCJlb0y82LgHEldcR3w2MpeOpuGCDiklZM9SAyco7LBHJ84xo9WdmLmywfnqGww5/qcONcGkqNiwX3kSEy5zwU3Eh4KngFb4EkKrHttgWkMfAG8Jn5VTrXq9TLszfgD7QE3ju7Op6uo/gAAAABJRU5ErkJggg==' },
    { id: 4, name: 'Revisión de resultados con Dr. Jose', time: '04:30 PM - 05:15 PM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nNWXO04DMRRFBylLoE9NRTGiTJs0oaCBhjZTsgEEu0iRJihiMxSjKWcJUFCmS3MiRzayHH8m5ongK13J8vN9R/OzNVX13wU8AB9AG7Cq3f8GcAssgZXjL+AdaAJWtU9PTvWap6A3wA7YeBp8K0Ak2+g1bm6je9Yx8ALo9Lh23A8A925O1zrVu0qEWz32KQU+kq61sawP/HN7gDfSWlvraynwCLj2PAJjVRuJg09V2WDCm8azlb0z85LgJuCJlb0y82LgHEldcR3w2MpeOpuGCDiklZM9SAyco7LBHJ84xo9WdmLmywfnqGww5/qcONcGkqNiwX3kSEy5zwU3Eh4KngFb4EkKrHttgWkMfAG8Jn5VTrXq9TLszfgD7QE3ju7Op6uo/gAAAABJRU5ErkJggg==' },
  ];

  tasks = [
    { id: 1, name: 'Consulta para Chewbacca', time: '11:30 AM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nO3WvytFYRjA8eNXGQwUShQDd6AUJUIMNq7xMtjskkyUSaSkmLgJZVNistgsNvEffXS7r5g4x33VTfept+cZzvt+3+fbc04nSWpRDYFhNGIALehGJ9rQh2YMog4jYc9HHv0NsB+beMYJHnGBe9zgGg84xRMO8YIDvIb8hh1Mp4VO4gw57KIXaxjDMhYwi9XQ7RY6cBRMHIdcunAPNrCeBnyOpqB3qaQxs7LyOXOYCPUl6n/aUAx5CCto+CV4HjOh3kd7KnDMwF4a8C0KEdZUmIVx3FV1x8WqAit/QApBXyFtXRHY52uxiHyWulJw7svAZKozg2VUGk21jEqjqVaB3ppq/1J18v2Ze3811eMxwbkMSruigWNGWvBVVGr5zCO0/vRQPvx3FSOu7djN1CJJG++5NFwDQjfIuQAAAABJRU5ErkJggg==', linkIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVR4nO2VvWoCQRSFv7G0ij9VniBEm6BYaB4gsTWFSAgY0Cpd8iqCgk8QSC8KAcuIRQi+h0lhlUJZOMIizuzuaBPigVNc5s79uMPevfDflQEega7FD0D6UEgbWEf43lWgArwBc4tvgBRQBEohl4FpCNKxAVrAL/CtC5Mdj4DqnnsG6Kv4xAXJq/gHkE3wdCYE6KtDK+ROh7cJAYMQIIgLLkhHhwUPwEAxx4QYoKf8oT4Ejgkxlg62utBZ2xdiIgCoq2BQz3whTxGAmubIqjiQS4H2AdAcfR0KidIYWLgSTpBEz7X9fV/hrynw6Uq4FuTZE5ADfoBXV1IwRO/ACnjRXinFdB2YaU0EsVPnAq09vASacds2ejrXDu/uuJFwB/1RbQAq/nUqTc80IgAAAABJRU5ErkJggg==' },
    { id: 2, name: 'Vacunación anti-rabica', time: '11:40 AM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACL0lEQVR4nO2WTUhVQRTHX4VFGEiipS5bZB+4M9wVLQxXLtQsV7UIHiRFGLh0Y0sRAw3ahSi0EEE0XQiSUrskSCKiD5JSCCoVwlLLnxz8S9N43333Pp+C4Fm9N+f8z2/mzJyZm0js2W4woAJ4BEwDy8B3YAxIAge3A5gDPABWWbclwef5Z2+A09mEHgKGlXwGuAbkyrcPKAeeyP8NOJFt6BRQnCLOJtChuGfZhhamiT8ATCr+4o5AHd11adp3DCrtGekGtwI1q42pPyXd0FZOr9lP4HyMHA3S3c+4vMDduHBgXJqqjKCOz4VfSJOnWbEvrb0yhqaDA0eAq3aCgV7daotAWZTV9kQ5vT4cuAJ8ZbOt6i7PD4NeVvBH4FiESW7AfwuwAnQD9ban8r9XzKRVJFWiFwoK3TtPc0+axaDbCTgMDCjmYVCC45r166hQ6TqV9I43XgKMAk3a+1m9YCVB76pZb0zwO5U4z4O+Vb4OjbXpf52fwJ4ys8cxwba/symg/fZuazypsWY/QT7wB/gQA3rTaRn7MMgLgiq2RePJoERP5ayOAd2wGuCkyt7nQfcDrxS3uaeBSjmtH0tDoLedlbbo97TKXODfUs5qx8NWYreO2RxwCzjq+MrsDMj/C7ik8S7nIbkBFOkGPOfEL9hLFQa2srQCfyWw0n0Bfjhl/Wxd4GnaHI1vn2wSITv33wTOWsPbYVP/2Yyfqy9zQzTW1xP6whwBGu0SiQTds8Q22Ro+FmQNgKZM2gAAAABJRU5ErkJggg==', linkIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVR4nO2VvWoCQRSFv7G0ij9VniBEm6BYaB4gsTWFSAgY0Cpd8iqCgk8QSC8KAcuIRQi+h0lhlUJZOMIizuzuaBPigVNc5s79uMPevfDflQEega7FD0D6UEgbWEf43lWgArwBc4tvgBRQBEohl4FpCNKxAVrAL/CtC5Mdj4DqnnsG6Kv4xAXJq/gHkE3wdCYE6KtDK+ROh7cJAYMQIIgLLkhHhwUPwEAxx4QYoKf8oT4Ejgkxlg62utBZ2xdiIgCoq2BQz3whTxGAmubIqjiQS4H2AdAcfR0KidIYWLgSTpBEz7X9fV/hrynw6Uq4FuTZE5ADfoBXV1IwRO/ACnjRXinFdB2YaU0EsVPnAq09vASacds2ejrXDu/uuJFwB/1RbQAq/nUqTc80IgAAAABJRU5ErkJggg==' },
    { id: 3, name: 'Recepción de resultados', time: '12:10 AM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nNWXO04DMRRFBylLoE9NRTGiTJs0oaCBhjZTsgEEu0iRJihiMxSjKWcJUFCmS3MiRzayHH8m5ongK13J8vN9R/OzNVX13wU8AB9AG7Cq3f8GcAssgZXjL+AdaAJWtU9PTvWap6A3wA7YeBp8K0Ak2+g1bm6je9Yx8ALo9Lh23A8A925O1zrVu0qEWz32KQU+kq61sawP/HN7gDfSWlvraynwCLj2PAJjVRuJg09V2WDCm8azlb0z85LgJuCJlb0y82LgHEldcR3w2MpeOpuGCDiklZM9SAyco7LBHJ84xo9WdmLmywfnqGww5/qcONcGkqNiwX3kSEy5zwU3Eh4KngFb4EkKrHttgWkMfAG8Jn5VTrXq9TLszfgD7QE3ju7Op6uo/gAAAABJRU5ErkJggg==', linkIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVR4nO2VvWoCQRSFv7G0ij9VniBEm6BYaB4gsTWFSAgY0Cpd8iqCgk8QSC8KAcuIRQi+h0lhlUJZOMIizuzuaBPigVNc5s79uMPevfDflQEega7FD0D6UEgbWEf43lWgArwBc4tvgBRQBEohl4FpCNKxAVrAL/CtC5Mdj4DqnnsG6Kv4xAXJq/gHkE3wdCYE6KtDK+ROh7cJAYMQIIgLLkhHhwUPwEAxx4QYoKf8oT4Ejgkxlg62utBZ2xdiIgCoq2BQz3whTxGAmubIqjiQS4H2AdAcfR0KidIYWLgSTpBEz7X9fV/hrynw6Uq4FuTZE5ADfoBXV1IwRO/ACnjRXinFdB2YaU0EsVPnAq09vASacds2ejrXDu/uuJFwB/1RbQAq/nUqTc80IgAAAABJRU5ErkJggg==' },
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRecordatoriosDuenioComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }  
}
