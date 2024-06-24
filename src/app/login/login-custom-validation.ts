import { AbstractControl, ValidationErrors, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export const loginValidator = (control: AbstractControl): ValidationErrors | null => {
    const accountNumber: string = control.value;
    
    if (accountNumber === '123456') {
        return { accountNumberError: 'Número de cuenta no válido' };
    }
    return null; // no hay error de validación
}


