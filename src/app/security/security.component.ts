import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {
  activeTab: string = 'veterinario'; // Puedes establecer un valor predeterminado aquí

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }

  constructor(private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
