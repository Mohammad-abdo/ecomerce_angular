import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagStyle]'
})
export class ImagStyleDirective {

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.borderRadius="10px"
    this.ele.nativeElement.style.hight="500px !important"

   }
   @HostListener("mouseover")fun1(){
    this.ele.nativeElement.style.borderRadius="15px"
    // this.ele.nativeElement.style.textShadow="2px 2px 3px #444 "
   }
   @HostListener("mouseout")fun2(){
    this.ele.nativeElement.style.borderRadius="10px"

   }
}
