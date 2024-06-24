import { Component, inject } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.component.html',
  styleUrl: './recuperar-cuenta.component.css'
})
export class RecuperarCuentaComponent {

  private readonly formBuilder = inject(FormBuilder); 

  inputRecuperarCuenta = this.formBuilder.group({
    contra: ['', Validators.required],
    vcontra: ['', Validators.required],
  }, {validator: this.passwordMatchValidator('contra', 'vcontra')});

  
 // Función para validar que las contraseñas coincidan
 private passwordMatchValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordMismatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

// Método para verificar si las contraseñas coinciden en cada formulario
passwordsMatch(form: FormGroup): boolean {
  return form.controls['contra'].value === form.controls['vcontra'].value;
}

submitTransfer() {
  if (this.inputRecuperarCuenta.valid) {
    console.log(this.inputRecuperarCuenta.value);
  } else {
    console.log('Formulario inválido');
  }
}
}
