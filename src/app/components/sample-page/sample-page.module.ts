import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { NgSelectModule, NgSelectConfig } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";

import { CalendarModule } from "primeng/calendar";

import { PrimeNGConfig } from 'primeng/api';


import { SamplePageRoutingModule } from "./sample-page-routing.module";
import { SamplePage1Component } from "./sample-page1/sample-page1.component";
import { SamplePage2Component } from "./sample-page2/sample-page2.component";
import { ObserveDomChangeDirective } from "src/app/shared/directives/observe-dom-change.directive";


@NgModule({
  declarations: [SamplePage1Component, SamplePage2Component, ObserveDomChangeDirective],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    NgSelectModule,
    FormsModule,
    CalendarModule,
  ]

})
export class SamplePageModule {

  es: any;


  constructor(private config: NgSelectConfig, private primengConfig: PrimeNGConfig) {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }


    this.config.notFoundText = "No se encontraron registros";
    this.primengConfig.setTranslation(this.es);
  }


}
