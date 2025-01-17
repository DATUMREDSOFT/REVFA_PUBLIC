import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  mes: string = "Enero";
  dia: number = 1;
  anio: number = 2000;

  constructor() { }

  ngOnInit(): void {

    const currentDate = moment();
    this.mes = currentDate.format('MMMM');
    this.dia = Number(currentDate.date());
    this.anio = currentDate.year();

  }

}
