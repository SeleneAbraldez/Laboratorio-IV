import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hecho'
})
export class HechoPipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo){
      tipo = "https://imageog.flaticon.com/icons/png/512/1060/1060876.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF";
    }
    return tipo;
  }

}
