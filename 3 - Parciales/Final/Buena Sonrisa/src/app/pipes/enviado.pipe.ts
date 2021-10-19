import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enviado'
})
export class EnviadoPipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo){
      tipo = "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png";
    }
    return tipo;
  }

}
