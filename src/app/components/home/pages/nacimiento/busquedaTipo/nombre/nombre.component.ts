import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.scss'
})
export class NombreComponent {

  

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      primerNombre: new FormControl('', [Validators.required]),
      primerApellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      lugarNacimiento: new FormControl('', [Validators.required]),
      segundoNombre: new FormControl(''), // Opcional
      segundoApellido: new FormControl(''), // Opcional
      tercerNombre: new FormControl('') // Opcional
    });
  }

  mostrarError(campo: string): boolean {
    const control = this.formulario.get(campo)!;
    return control.invalid && (control.dirty || control.touched);
  }



}
