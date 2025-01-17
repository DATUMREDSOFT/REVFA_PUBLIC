import { Component, OnInit } from '@angular/core';
import { MigasService } from '../../home/services/migas.service';

@Component({
  selector: 'app-sample-page1',
  templateUrl: './sample-page1.component.html',
  styleUrls: ['./sample-page1.component.scss']
})
export class SamplePage1Component implements OnInit {

  iconoMostrarClave: string = 'eye';
  mostrarClave: boolean = false;


  constructor(   
    private migasService: MigasService
  ) {}

  ngOnInit() {
    this.migasService.setear(["Demo", "Formulario #1"]);
  }

  toggleMostrarContrasena() {
    this.mostrarClave = !this.mostrarClave;
    this.iconoMostrarClave = this.mostrarClave ? 'eye-off' : 'eye';
  }

}
