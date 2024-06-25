import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  activeTab: string = 'duenos'; // Puedes establecer un valor predeterminado aquí

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }

  private readonly formBuilder = inject(FormBuilder); 

  formDuenos = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    tlf: ['', Validators.required],
    contrasena: ['', Validators.required],
    c_contrasena: ['', Validators.required]
  }, { validator: this.passwordMatchValidator('contrasena', 'c_contrasena') });

  formAlbergue = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    tlf: ['',Validators.required],
    n_albergue: ['', Validators.required],
    t_albergue: ['', Validators.required],
    contrasena: ['', Validators.required],
    c_contrasena: ['', Validators.required]
  }, { validator: this.passwordMatchValidator('contrasena', 'c_contrasena') });

  formVeterinario = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    tlf: ['', Validators.required],
    especialidad: ['', Validators.required],
    institucion: ['', Validators.required],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    c_contrasena: ['', Validators.required]
  }, { validator: this.passwordMatchValidator('contrasena', 'c_contrasena') });

  restrictPhone(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 9) {
      input.value = input.value.slice(0, 9);
    }
  }

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
    return form.controls['contrasena'].value === form.controls['c_contrasena'].value;
  }
}

