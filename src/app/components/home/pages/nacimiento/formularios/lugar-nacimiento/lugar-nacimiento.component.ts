import { Component } from '@angular/core';

@Component({
  selector: 'app-lugar-nacimiento',
  templateUrl: './lugar-nacimiento.component.html',
  styleUrl: './lugar-nacimiento.component.scss'
})
export class LugarNacimientoComponent {

  country: string = 'País A';
  state: string = 'Departamento A';
  city: string = 'Ciudad A';
  canton: string = 'Cantón A';

}
