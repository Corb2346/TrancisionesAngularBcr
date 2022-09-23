import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[colorDynamico]'
})
export class ColorDynamicoDirective {
  
  
@ViewChild('textoSize',{static:true})textoSize!: ElementRef

@HostListener('click') mouse(){

}

  constructor(private render2 : Renderer2 ,private element: ElementRef) {

   }

   @HostListener('mouseenter') mouseOver(){
    this.render2.setStyle(this.element.nativeElement,'color','red');
    this.render2.setStyle(this.element.nativeElement,'backgroundColor','green');
    this.render2.setStyle(this.element.nativeElement,'fontSize','50px');
    this.render2.setStyle(this.element.nativeElement,'transition',"all 2s");
   }

   @HostListener('click') mouseClick(){
    this.render2.setStyle(this.element.nativeElement,'color','yellow');
    this.render2.setStyle(this.element.nativeElement,'backgroundColor','blue');
    this.render2.setStyle(this.element.nativeElement,'fontSize','25px');
    this.render2.setStyle(this.element.nativeElement,'transition',"all 1s");
   }

   @HostListener('mouseleave') mouseLeave(){
    this.render2.setStyle(this.element.nativeElement,'color','purple');
    this.render2.setStyle(this.element.nativeElement,'backgroundColor','orange');
    this.render2.setStyle(this.element.nativeElement,'fontSize','20px');
    this.render2.setStyle(this.element.nativeElement,'transition',"all 1s");
   }
}
