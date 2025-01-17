import { Component, OnInit } from '@angular/core';
import { MigasService } from '../services/migas.service';

@Component({
  selector: 'app-main',
  standalone: false, 
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{



  constructor(   
    private migasService: MigasService
  ) {}

  ngOnInit() {
    this.migasService.setear(["Inicio", "Principal"]);
  }

}
