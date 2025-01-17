import { Routes } from '@angular/router';

export const content: Routes = [
  

  {
    path: 'inicio',
    loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule),
    data: {
      title: "Inicio",
      breadcrumb: "Inicio"
    },
   },

   {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample-page/sample-page.module').then(m => m.SamplePageModule),
    data: {
      title: "sample-page",
      breadcrumb: "sample-page"
    },
   },
   

 
];
