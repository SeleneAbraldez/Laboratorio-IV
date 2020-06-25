import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulos'
})
export class TitulosPipe implements PipeTransform {

  // remplazo TODAS los - por espacios para que los titulos queden mas lindos
  transform(value: string, ...args: string[]): string {
    // value = value.replace("-", " ");
    value = value.split('-').join(' ');
    return value;
  }

}
