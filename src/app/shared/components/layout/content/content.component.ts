import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'
import { NavService } from 'src/app/shared/services/nav.service';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit {

  constructor(public navServices: NavService, public layout: LayoutService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.layout.config.settings.layout = params['layout'] ? params['layout'] : ''
    })
  }

  ngAfterViewInit() {
    feather.replace();
  }

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  get layoutClass(){
    return this.layout.config.settings.sidebar_type +' '+ this.layout.config.settings.layout.replace("layout", "sidebar")
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

}
