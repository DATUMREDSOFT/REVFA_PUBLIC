import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import 'bootstrap-toggle/js/bootstrap-toggle.min.js';
declare var $: any;

@Directive({
  selector: 'input[data-toggle="toggle"]'
})
export class BootstrapToggleDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    // Aplica el plugin Bootstrap Toggle al elemento
    $(this.elementRef.nativeElement).bootstrapToggle();
  }
}
