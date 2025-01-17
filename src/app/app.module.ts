import { AfterViewInit, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';
import { Login3Component } from './auth/login3/login3.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastModule } from 'primeng/toast';
import { RecordarClaveComponent } from './auth/recordar-clave/recordar-clave.component';
import { HomeComponent } from './landing/home/home.component';
import { Homev2Component } from './landing/homev2/homev2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Homev3Component } from './landing/homev3/homev3.component';



import { RecordarClavev2Component } from './auth/recordar-clavev2/recordar-clavev2.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { Registrov2Component } from './auth/registrov2/registrov2.component';
import { PrincipalComponent } from './catalogo/principal/principal.component';




@NgModule({
  declarations: [AppComponent, LoginComponent, Login2Component, Login3Component, RecordarClaveComponent, HomeComponent, Homev2Component, Homev3Component, RecordarClavev2Component, RegistroComponent, Registrov2Component, PrincipalComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    ToastModule,
    NgbModule,

    FormsModule,

  ],
  bootstrap: [AppComponent],
  exports: [

  ],
  providers: [
    provideNgxMask()
  ],

})

export class AppModule {






}
