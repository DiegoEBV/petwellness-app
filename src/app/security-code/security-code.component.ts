import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrl: './security-code.component.css'
})
export class SecurityCodeComponent {
  constructor(private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  
  private readonly formBuilder = inject(FormBuilder); 

  recoveryGroup = this.formBuilder.group({
    input1: ['', Validators.required],
    input2: ['', Validators.required],
    input3: ['', Validators.required],
    input4: ['', Validators.required],
  });

  submitTransfer(){
    if(this.recoveryGroup.valid){
      console.log(this.recoveryGroup.value);
  } else{
    console.log('Correo inválido');};
}
}
