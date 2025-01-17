import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-registrov2',
  templateUrl: './registrov2.component.html',
  styleUrl: './registrov2.component.scss'
})
export class Registrov2Component {

  registrationForm: FormGroup;
   duiTxt: string = '';

  @ViewChild("msgVacio") private msgVacio: SwalComponent;
  @ViewChild("msgExito") private msgExito: SwalComponent;

  constructor(private formBuilder: FormBuilder) { }

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;


  validar() {
    if (this.duiTxt.length <= 5) {
      this.msgVacio.fire();
    } else {
      this.msgExito.fire();
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  
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
