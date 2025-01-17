import { Component } from '@angular/core';
import { MigasService } from '../../services/migas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-migas',
  templateUrl: './migas.component.html',
  styleUrl: './migas.component.scss'
})
export class MigasComponent {


  breadcrumbs: Array<string> = [];
  subscription: Subscription;

  constructor(private breadcrumbService: MigasService) {
    this.subscription = this.breadcrumbService.currentBreadcrumbs.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
