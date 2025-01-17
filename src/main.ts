import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as moment from 'moment';
import 'moment/locale/es';


moment.locale('es');
console.log(moment().format('LLLL') + "aa"); 


if (environment.production) {
  enableProdMode();
}

if (window.location.pathname === '/') {
  window.location.href = '/homev3';
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
