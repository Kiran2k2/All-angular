import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // @Input({required:true}) size!:{width:string; height:string}
  // // size=input.required<{width:string;height:string}>()
  // @Output() changeSize=new EventEmitter<{width:string;height:string}>();
  
size=model.required <{width:string; height:string}>()

  onReset() {
    // this.changeSize.emit({
    //   width:'100',
    //   height:'200'
    // })

    this.size.set({
      width:'100',
      height:'200'
    })
  }
}
