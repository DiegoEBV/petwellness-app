import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.component.html',
  styleUrl: './recuperar-cuenta.component.css'
})
export class RecuperarCuentaComponent {

  activeTab: string = 'duenos'; // el formulario inicia en la pestaña dueños

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }
  
  private readonly formBuilder = inject(FormBuilder); 

  inputRecuperarCuenta = this.formBuilder.group({
    contra: ['', Validators.required],
    vcontra: ['', Validators.required],
  });
  submitTransfer(){
    if(this.inputRecuperarCuenta.valid){
      console.log(this.inputRecuperarCuenta.value);
  } else{
    console.log('Correo inválido');};
}
}
