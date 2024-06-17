import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeTab: string = 'veterinario'; // Puedes establecer un valor predeterminado aquí

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }
}
