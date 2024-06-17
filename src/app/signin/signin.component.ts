import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  activeTab: string = 'veterinario'; // Puedes establecer un valor predeterminado aquí

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }
}
