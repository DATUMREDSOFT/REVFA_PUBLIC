import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dui: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    // Aquí manejas la lógica para enviar el formulario
  }

  validateField(field: string) {
    const control = this.registrationForm.get(field);
    control!.markAsTouched({ onlySelf: true });
  }

  isFieldInvalid(field: string) {
    const control = this.registrationForm.get(field);
    return control!.invalid && (control!.dirty || control!.touched);
  }



}
