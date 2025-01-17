import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PartidasNacComponent } from './partidas-nac/partidas-nac.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'principal',
        component: MainComponent,
        data: {
            title: "Principal",
            breadcrumb: "Principal",
        }
      },
      {
        path: 'partidasNac',
        component: PartidasNacComponent,
        data: {
            title: "Partidas Nacimiento",
            breadcrumb: "Partidas Nacimiento",
        }
      }
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
