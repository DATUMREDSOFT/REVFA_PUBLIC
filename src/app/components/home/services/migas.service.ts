import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigasService {

  private breadcrumbs = new BehaviorSubject<Array<string>>([]);
  
  currentBreadcrumbs = this.breadcrumbs.asObservable();

  constructor() { }

  setear(breadcrumbs: Array<string>) {
    this.breadcrumbs.next(breadcrumbs);
  }

 
  agregar(breadcrumb: string) {
    const updatedBreadcrumbs = [...this.breadcrumbs.value, breadcrumb];
    this.breadcrumbs.next(updatedBreadcrumbs);
  }

 
  limpiar() {
    this.breadcrumbs.next([]);
  }
}
