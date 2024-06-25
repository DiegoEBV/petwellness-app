import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css'
})

export class RecoveryComponent {
  activeTab: string = 'veterinario'; // Puedes establecer un valor predeterminado aquí

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }

  constructor(private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
