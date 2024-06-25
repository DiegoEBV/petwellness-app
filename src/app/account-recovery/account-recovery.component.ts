import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrl: './account-recovery.component.css'
})

export class AccountRecoveryComponent {
  
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

restrictInput(event: any) {
  const input = event.target as HTMLInputElement;
  if (input.value.length > 1) {
    input.value = input.value.slice(0, 1);
  }
}
}
