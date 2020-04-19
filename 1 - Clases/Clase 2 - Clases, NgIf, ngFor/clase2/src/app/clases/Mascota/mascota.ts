//Para crear a clase, ponemos en la terminal ng g class clases/Mascota
export class Mascota {
    nombre: string;
    tipo: string;
    foto: string;

    constructor(nombre, img, tipo){
        this.nombre = (nombre);
        this.tipo = (tipo);
        this.foto = (img);
    }
}
