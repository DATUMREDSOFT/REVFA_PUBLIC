import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { SwalComponent, SwalDirective } from "@sweetalert2/ngx-sweetalert2";
import { PrincipalComponent } from "../pages/nacimiento/principal/principal.component";
import { ViewportScroller } from "@angular/common";
import { MigasService } from "../services/migas.service";
import { DatosGeneralesComponent } from "../pages/nacimiento/formularios/datos-generales/datos-generales.component";
import { Renderer2 } from "@angular/core";

@Component({
  selector: "app-partidas-nac",
  standalone: false,
  templateUrl: "./partidas-nac.component.html",
  styleUrl: "./partidas-nac.component.scss",
})
export class PartidasNacComponent implements OnInit {
  // alertas
  @ViewChild("testing") private testing: SwalComponent;

  @ViewChild("guardar") private guardarSw: SwalComponent;

  @ViewChild("PrincipalComponent") principalComponent!: PrincipalComponent;

  @ViewChild("datosGenerales") datosGenerales!: DatosGeneralesComponent;


  datosdummys() {
    this.datosGenerales.datosDummys()
  }

  manejarClicEnHijo(): void {
    console.log("padre")
    this.datosdummys()
  }

  constructor(
    private migasService: MigasService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.migasService.setear(["Inicio", "Partidas Nacimiento"]);
  }


  activeTab: string = "paso1";

  changeTab(tabName: string): void {
    this.activeTab = tabName;
  }

  selectedCar: number;

  cars = [
    { id: 1, name: "Volvo" },
    { id: 2, name: "Saab" },
    { id: 3, name: "Opel" },
    { id: 4, name: "Audi" },
  ];

  date?: Date;

  activeIndex: number = 0;
  items: any[] = [
    { label: "Generales" },
    { label: "Datos Madre" },
    { label: "Datos Padre" },
    { label: "Datos Inscrito" },
    { label: "Datos  Informante" },
    { label: "Guardar" },
    { label: "Finalizar" },
  ];

  anterior() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.changeTab("paso" + (this.activeIndex + 1));
    }
  }

  scrollToTop() {
    // Hacer el desplazamiento hacia arriba
    console.log('scrolltop')
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  siguiente() {
    if (this.activeIndex < this.items.length - 1) {
      const paso = this.activeIndex + 1;

      if (paso == 1 && !this.principalComponent.validar()) {
        this.testing.fire();
      } else {
        this.activeIndex++;
        this.changeTab("paso" + (this.activeIndex + 1));
      }
    }

    if (this.activeIndex == (this.items.length - 1)) {
      this.guardarSw.fire();
    }
  }


  guardarSwFun() {
    this.guardarSw.fire();
  }


  hola() {
    console.log("retorno formuilario: " + this.principalComponent.validar());
  }



  calendarVal: any;
}
