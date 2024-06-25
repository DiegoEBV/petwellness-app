import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  formGroup2!: FormGroup;
  formGroup3!: FormGroup;
  activeTab: string = 'duenos';

  constructor(private fb: FormBuilder, private router: Router, private roleService: RoleService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.formGroup2 = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.formGroup3 = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }

  submitTransfer() {
    if (this.activeTab === 'duenos' && this.formGroup.valid) {
      this.roleService.setUserRole('duenio');
      this.router.navigate(['../homeduenio']);
    } else if (this.activeTab === 'albergues' && this.formGroup2.valid) {
      this.roleService.setUserRole('duenio'); // Assuming 'albergues' also uses 'duenio' role
      this.router.navigate(['../homeduenio']);
    } else if (this.activeTab === 'veterinario' && this.formGroup3.valid) {
      this.roleService.setUserRole('veterinario');
      this.router.navigate(['../homevet']);
    }
  }
}
