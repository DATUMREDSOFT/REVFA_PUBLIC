import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { MigasService } from '../../home/services/migas.service';

@Component({
  selector: 'app-sample-page2',
  templateUrl: './sample-page2.component.html',
  styleUrls: ['./sample-page2.component.scss']
})
export class SamplePage2Component implements OnInit, AfterViewInit {

  constructor(
    private migasService: MigasService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.migasService.setear(["Demo", "Formulario #2"]);
  }

  onDomChange(): void {
    console.log('Cambio')
  }

  ngAfterViewInit(): void {
    console.log('after view init')
    // $('input[data-toggle="toggle"]').bootstrapToggle();
  }

  selectedCar: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  date?: Date;
  date2?: Date;

  activeTab: string = 'datosGenerales';

  changeTab(tabName: string): void {
    this.activeTab = tabName;
  }


}
