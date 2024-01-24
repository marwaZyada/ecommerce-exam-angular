import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut',
  standalone: true
})
export class CutPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split(" ").slice(0,2).join(" ");
  }

}
