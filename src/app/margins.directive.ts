import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMargins]'
})
export class MarginsDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.margin = "1em";
  }
}
