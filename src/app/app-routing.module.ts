import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/routes';
import { FullComponent } from './shared/components/layout/full/full.component';
import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';
import { Login3Component } from './auth/login3/login3.component';
import { RecordarClaveComponent } from './auth/recordar-clave/recordar-clave.component';
import { HomeComponent } from './landing/home/home.component';
import { Homev2Component } from './landing/homev2/homev2.component';
import { Homev3Component } from './landing/homev3/homev3.component';
import { RecordarClavev2Component } from './auth/recordar-clavev2/recordar-clavev2.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { Registrov2Component } from './auth/registrov2/registrov2.component';
import { PrincipalComponent } from './catalogo/principal/principal.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: content
  },
  {
    path: '',
    redirectTo: 'homev3',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/login2',
    component: Login2Component
  },
  {
    path: 'auth/recordar-clave',
    component: RecordarClaveComponent
  },
  {
    path: 'auth/recordar-clavev2',
    component: RecordarClavev2Component

  },
  {
    path: 'auth/registro',
    component: Registrov2Component

  },
  {
    path: 'auth/registrov2',
    component: Registrov2Component

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'homev2',
    component: Homev2Component
  },
  {
    path: 'homev3',
    component: Homev3Component
  },
  {
    path: 'principal/catag',
    component: PrincipalComponent
  },
  {
    path: 'layout',
    component: ContentComponent
  },
  
 
  {
    path: '**',
    redirectTo: '/inicio/principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
