import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo == "comestible"){
      console.log("comestible");
      var str = tipo.replace('comestible', '<span style="color: red">comestible</span>');
    }
    else if(tipo == "bebible"){
      console.log("bebible");
      var str = "<span style='color: blue'>bebible</span>";
      // var str = tipo.replace('bebible', 'style="color: blue"');

    }
    else if(tipo == "limpieza"){
      console.log("limpieza");
      var str = tipo.replace('/limpieza', '<span style="color: green">limpieza</span>');
    }
    return tipo;
  }

}
