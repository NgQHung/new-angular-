import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') appHighlight = 'blue';

  // run only once and does not get the atribute outside
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = this.appHighlight;
  }
  // use alternative solution
  ngOnInit() {
    this.el.nativeElement.style.color = this.appHighlight;
  }
}
