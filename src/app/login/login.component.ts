import { Component, inject } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeTab: string = 'duenos'; // el formulario inicia en la pestaña dueños

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }


  private readonly formBuilder = inject(FormBuilder); 

  formGroup = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  formGroup2 = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  formGroup3 = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  submitTransfer(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
  } else{
    console.log('Correo inválido');};
}
}
