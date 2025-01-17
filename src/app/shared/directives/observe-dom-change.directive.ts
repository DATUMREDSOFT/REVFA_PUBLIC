import { Directive, ElementRef, Renderer2, EventEmitter, Output, OnDestroy } from '@angular/core';

@Directive({
  selector: '[observeDomChange]'
})
export class ObserveDomChangeDirective implements OnDestroy {
  private mutationObserver: MutationObserver;

  @Output() domChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.mutationObserver = new MutationObserver((mutations) => {
      this.domChanged.emit();
    });

    this.mutationObserver.observe(this.el.nativeElement, {
      childList: true,
      attributes: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    this.mutationObserver.disconnect();
  }
}
