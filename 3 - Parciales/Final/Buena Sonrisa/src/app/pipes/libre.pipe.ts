import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libre'
})
export class LibrePipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo == "libre"){
      tipo = "https://image.flaticon.com/icons/svg/63/63464.svg";
    }else if(tipo == "ocupado") {
      tipo = "https://image.flaticon.com/icons/png/512/61/61457.png";
    }
    return tipo;
  }
}
