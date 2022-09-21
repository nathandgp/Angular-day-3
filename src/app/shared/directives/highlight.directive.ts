import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // click mouseenter mouseleave
  

  // constructor(private el:ElementRef) { 
  //   this.el.nativeElement.style.backgroundColor = 'orange';

  // }

  // private highLight(color:string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}



