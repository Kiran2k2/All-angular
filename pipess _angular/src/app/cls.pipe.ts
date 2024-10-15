import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cls',
  standalone: true
})
export class ClsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
