import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private ele:ElementRef) {

   }
   @HostListener("mouseover")fun1(){
    this.ele.nativeElement.style.borderRadius="15px"
    this.ele.nativeElement.style.boxShadow="2px 2px 3px #444 "
   }
   @HostListener("mouseout")fun2(){
    this.ele.nativeElement.style.borderRadius="10px"
    this.ele.nativeElement.style.boxShadow="none"
   }

}
