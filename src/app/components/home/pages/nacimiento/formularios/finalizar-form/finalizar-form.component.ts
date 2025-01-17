import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-finalizar-form',
  templateUrl: './finalizar-form.component.html',
  styleUrl: './finalizar-form.component.scss'
})
export class FinalizarFormComponent  implements OnInit{

  @ViewChild("guardar") private guardarSw: SwalComponent;

  ngOnInit(): void {
    //  this.guardarSw.fire();
  }

  


}
