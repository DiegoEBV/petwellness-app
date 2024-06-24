import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-navbar',
  templateUrl: './notification-navbar.component.html',
  styleUrls: ['./notification-navbar.component.css']
})
export class NotificationNavbarComponent {
  notifications = [
    { id: 1, message: 'Urgente: Revisión de Medicamentos de Jade a las 11:40 AM' },
    { id: 2, message: 'Urgente: Check de resultados de Milanes a las 12:10 AM' },
    { id: 3, message: 'Urgente: Consulta con Copito a las 11:30 AM' },
  ];

  showNotifications = false;
  hideTimeout: any;

  toggleNotifications(show: boolean) {
    if (show) {
      clearTimeout(this.hideTimeout);
      this.showNotifications = true;
    } else {
      this.hideTimeout = setTimeout(() => {
        this.showNotifications = false;
      }, 500); 
    }
  }

  get notificationCount(): number {
    return this.notifications.length;
  }

  get latestNotification(): string {
    return this.notifications.length > 0 ? this.notifications[0].message : 'No hay notificaciones';
  }

  handleNotificationClick() {
    if (this.notifications.length > 0) {
      this.notifications.shift(); 
    }
  }
}
