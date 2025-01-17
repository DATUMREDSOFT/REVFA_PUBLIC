import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: "app-recordar-clave",
  templateUrl: "./recordar-clave.component.html",
  styleUrl: "./recordar-clave.component.scss",
})
export class RecordarClaveComponent {
  duiTxt: string = '';

  @ViewChild("msgVacio") private msgVacio: SwalComponent;
  @ViewChild("msgExito") private msgExito: SwalComponent;

  validar() {
    if (this.duiTxt.length <= 5) {
      this.msgVacio.fire();
    } else {
      this.msgExito.fire();
    }
  }
}
