import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

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
    email: ['', Validators.required],
    tlf: ['', Validators.required],
    contrasena: ['', Validators.required],
    c_contrasena: ['', Validators.required]
  });

  formVeterinario = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', Validators.required],
    tlf: ['', Validators.required],
    n_albergue: ['', Validators.required],
    t_albergue: ['', Validators.required],
    contrasena: ['', Validators.required],
    c_contrasena: ['', Validators.required]
  });

  formAlbergue = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', Validators.required],
    tlf: ['', Validators.required],
    especialidad: ['', Validators.required],
    institucion: ['', Validators.required],
    contrasena: ['', Validators.required],
    c_contrasena: ['', Validators.required]
  });


  submitTransferD(){
    if(this.formDuenos.valid){
      console.log(this.formDuenos.value);
  } else{
    console.log('Correo inválido');};
  }

  submitTransferV(){
    if(this.formDuenos.valid){
      console.log(this.formDuenos.value);
  } else{
    console.log('Correo inválido');};
  }

  submitTransferA(){
    if(this.formDuenos.valid){
      console.log(this.formDuenos.value);
  } else{
    console.log('Correo inválido');};
  }
}
