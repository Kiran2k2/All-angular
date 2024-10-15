import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
  pure:false
})
export class ShortPipe implements PipeTransform {

  transform(value: string[]| number[], direction:'asc'|'desc'='asc') {
    const sorted=[...value]
    sorted.sort((a,b)=>{
      if(direction==='asc'){
        return a > b ? 1: -1
      }
      else{
        return a > b ? -1 : 1;
      }
    })
    return sorted
  }

}
