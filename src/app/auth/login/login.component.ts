import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }
  get clave() {
    return this.myForm.get('clave');
  }

  // Método para mostrar si el control es válido o no después del blur
  showValidation() {
    this.email?.markAsTouched();
  }

  mostrarClave: boolean = false;
 

  toggleMostrarContrasena() {
    this.mostrarClave = !this.mostrarClave;
  
  }

  onInput() {
    if (this.email?.value) {
      this.email?.markAsTouched();
    }
  }


  showValidationClave() {
    this.clave?.markAsTouched();
  }

  onInputclave() {
    if (this.clave?.value) {
      this.clave?.markAsTouched();
    }
  }


  
}
