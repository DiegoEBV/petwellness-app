import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ShopRequest } from '../../tienda/interfaces/shop-request.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showCartIcon: boolean = false;
  isCartVisible: boolean = false;
  notificationCount: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCartIcon = this.router.url.includes('homeduenio');
      }
    });
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  updateNotificationCount(count: number) {
    this.notificationCount = count;
  }

}
