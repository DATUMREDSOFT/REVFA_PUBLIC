import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrl: './datos-generales.component.scss'
})
export class DatosGeneralesComponent {

  formulario: FormGroup;

  date: Date;

  constructor(private formBuilder: FormBuilder,private elementRef: ElementRef) {
    this.formulario = this.formBuilder.group({
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      tercerNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      estadoFamiliar: ['', Validators.required],
      tipoDocumento: [''],
      numeroDocumento: [''],
      nacionalidad: [''],
      profesionOficio: [''],
      fechaNacimiento: [''],
      edad: ['']
    });

    
  }



  ngAfterViewInit() {
    this.setFocus();
  }

  setFocus() {
    const inputElement: HTMLElement = this.elementRef.nativeElement.querySelector('input');
    if (inputElement) {
      inputElement.focus();
    }
  }


  mostrarError(campo: string): boolean {
    const control = this.formulario.get(campo)!;
    return control.invalid && (control.dirty || control.touched);
  }




  datosDummys(){
    this.formulario.patchValue({
      primerNombre: 'Ana',
      primerApellido: 'García',
      estadoFamiliar: 'soltero',
      tipoDocumento: 'DUI',
      numeroDocumento: '05772529-5'
    });
  }





}
