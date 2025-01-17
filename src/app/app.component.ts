import { Component, HostBinding, Inject, PLATFORM_ID, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { delay, map, withLatestFrom } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private loader: LoadingBarService,
    private router: Router, private renderer: Renderer2) {

  }

  onDomChange(): void {
    console.log('Cambio')
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }





}
