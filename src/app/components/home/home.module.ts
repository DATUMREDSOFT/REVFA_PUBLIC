import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { FirmaComponent } from './firma/firma.component';
import { PartidasNacComponent } from './partidas-nac/partidas-nac.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PrincipalComponent } from './pages/nacimiento/principal/principal.component';
import { BusquedaComponent } from './pages/nacimiento/busqueda/busqueda.component';

import { NgSelectModule, NgSelectConfig } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";

import { CalendarModule } from "primeng/calendar";

// Importa los módulos de PrimeNG que necesites
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { DUIComponent } from './pages/nacimiento/busquedaTipo/dui/dui.component';
import { NUIComponent } from './pages/nacimiento/busquedaTipo/nui/nui.component';
import { NombreComponent } from './pages/nacimiento/busquedaTipo/nombre/nombre.component';
import { DatosGeneralesComponent } from './pages/nacimiento/formularios/datos-generales/datos-generales.component';


import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MostrarPersonaComponent } from './pages/nacimiento/formularios/mostrar-persona/mostrar-persona.component';
import { LugarNacimientoComponent } from './pages/nacimiento/formularios/lugar-nacimiento/lugar-nacimiento.component';
import { EstudioOcupacionComponent } from './pages/nacimiento/formularios/estudio-ocupacion/estudio-ocupacion.component';
import { DireccionActualComponent } from './pages/nacimiento/formularios/direccion-actual/direccion-actual.component';
import { NumeroHijosComponent } from './pages/nacimiento/formularios/numero-hijos/numero-hijos.component';
import { EstudioOcupacionPadreComponent } from './pages/nacimiento/formularios/estudio-ocupacion-padre/estudio-ocupacion-padre.component';
import { DatosGeneralesInscritoComponent } from './pages/nacimiento/formularios/datos-generales-inscrito/datos-generales-inscrito.component';
import { DatosdepartoComponent } from './pages/nacimiento/formularios/datosdeparto/datosdeparto.component';
import { LugarDireccionNacimientoComponent } from './pages/nacimiento/formularios/lugar-direccion-nacimiento/lugar-direccion-nacimiento.component';
import { DatosGeneralesInformanteComponent } from './pages/nacimiento/formularios/datos-generales-informante/datos-generales-informante.component';
import { LugarNaciminetoInformanteComponent } from './pages/nacimiento/formularios/lugar-nacimineto-informante/lugar-nacimineto-informante.component';
import { DireccionSegunDUIInformanteComponent } from './pages/nacimiento/formularios/direccion-segun-duiinformante/direccion-segun-duiinformante.component';
import { GuardarRegistroPartidaComponent } from './pages/nacimiento/formularios/guardar-registro-partida/guardar-registro-partida.component';
import { Busquedav2Component } from './pages/nacimiento/busquedav2/busquedav2.component'; 
import { PrimeNGConfig, SharedModule, Translation } from 'primeng/api';


import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { AppModule } from 'src/app/app.module';
import { MigasComponent } from './utils/migas/migas.component';
import { MigasService } from './services/migas.service';
import { FinalizarFormComponent } from './pages/nacimiento/formularios/finalizar-form/finalizar-form.component';


@NgModule({
  declarations: [MainComponent,FirmaComponent,PartidasNacComponent, PrincipalComponent, BusquedaComponent, DUIComponent, NUIComponent, NombreComponent, DatosGeneralesComponent, MostrarPersonaComponent, LugarNacimientoComponent, EstudioOcupacionComponent, DireccionActualComponent, NumeroHijosComponent, EstudioOcupacionPadreComponent, DatosGeneralesInscritoComponent, DatosdepartoComponent, LugarDireccionNacimientoComponent, DatosGeneralesInformanteComponent, LugarNaciminetoInformanteComponent, DireccionSegunDUIInformanteComponent, GuardarRegistroPartidaComponent, Busquedav2Component, MigasComponent, FinalizarFormComponent],
  imports: [
  CommonModule,
    HomeRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SweetAlert2Module.forChild(),
    
    FormsModule,
    CalendarModule,
  
    StepsModule,
    ButtonModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    ToastModule,
  ],
  providers: [
    provideNgxMask(),
    MessageService
  ],
  exports:[
    MigasComponent    
  ]
})
export class HomeModule { 


  es: Translation;
  constructor(private config: NgSelectConfig,private primengConfig: PrimeNGConfig) {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
   }


    this.config.notFoundText = "No se encontraron registros";
    this.primengConfig.setTranslation(this.es);
  }



}
