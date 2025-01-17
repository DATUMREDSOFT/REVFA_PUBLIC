import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { MessageService } from "primeng/api";
import { MigasService } from "../../../services/migas.service";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrl: "./principal.component.scss",
  providers: [MessageService, { provide: "toast-appendTo", useValue: "body" }],
})
export class PrincipalComponent implements OnInit {
  // alertas
  @ViewChild("testing") private testing: SwalComponent;

  constructor(
    private messageService: MessageService,
    private migasService: MigasService
  ) {}



  tipoPartidaSelect: String = 'n/a';
  tipoCategoriaSelect: String = 'n/a';
  tipoDocuSelect: String = 'n/a';



  ngOnInit() {
    this.migasService.setear(["Inicio", "Partidas Nacimiento"]);
  }

  showSuccess() {
    this.messageService.add({
      key: "tc",
      severity: "success",
      summary: "Éxito",
      detail: "Mensaje de Éxito",
    });

    this.migasService.setear(["Andres", "Lopez", "Orador"]);

  }

  showError() {
    this.messageService.add({
      key: "tc",
      severity: "error",
      summary: "Error",
      detail: "Mensaje de Error",
    });

    this.migasService.agregar("pruebaAagregar");


  }

  tipoPartida: String = "Sin seleccionar";
  categoriaInformate: String = "Sin seleccionar";
  documentacionPresentada: String = "Sin seleccionar";
  isExpanded = true;

  pasoTipoPartida = true;
  pasoCatPartida = false;
  pasoDocPartida = false;

  // --------------
  clickTipoPartida() {
    this.pasoTipoPartida = true;
    this.pasoCatPartida = false;
    this.pasoDocPartida = false;
  }

  clickCatPartida() {
    this.pasoTipoPartida = false;
    this.pasoCatPartida = true;
    this.pasoDocPartida = false;
  }

  clickDocPartida() {
    this.pasoTipoPartida = false;
    this.pasoCatPartida = false;
    this.pasoDocPartida = true;
  }
  // --------------

  seleccionarTipoPartida(tipoPartida: string) {
    this.tipoPartida = tipoPartida;

    this.pasoTipoPartida = false;
    this.pasoCatPartida = true;
    this.pasoDocPartida = false;


    this.tipoPartidaSelect = tipoPartida

  }

  seleccionarCatPartida(cat: String) {
    this.categoriaInformate = cat;

    this.pasoTipoPartida = false;
    this.pasoCatPartida = false;
    this.pasoDocPartida = true;

    this.tipoCategoriaSelect = cat;
  }

  seleccionarDocPartida(doc: String) {
    this.documentacionPresentada = doc;

    this.pasoTipoPartida = false;
    this.pasoCatPartida = false;
    this.pasoDocPartida = true;

    this.tipoDocuSelect = doc;
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  validar(): boolean {
    if (
      this.tipoPartida !== "Sin seleccionar" &&
      this.categoriaInformate !== "Sin seleccionar" &&
      this.documentacionPresentada !== "Sin seleccionar"
    ) {
      console.log(
        "Al menos una de las variables ha cambiado de su valor inicial."
      );


      this.migasService.setear(["Inicio", "Partidas Nacimiento", "Declaración directa", "Mayor de Edad con Documento de Identificación",
    "Hospital o Centro de Salud"]);


      return true;
    } else {
      //this.testing.fire();

      return false;
    }
  }
}
