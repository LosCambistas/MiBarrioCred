import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Usuario} from "../../auth/usuario";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);

      const { firstName, lastName, email, password, userType } = this.registerForm.value;
      const newUser = new Usuario(firstName, lastName, email, password, userType);
      console.log('Nuevo Usuario:', newUser);

      // Redireccionar según el tipo de usuario
      if (userType === 'merchant') {
        this.router.navigate(['/business_menu']);
      } else if (userType === 'client') {
        this.router.navigate(['/client_menu']);
      }

    } else {
      console.log('Formulario inválido');
    }
  }
}
