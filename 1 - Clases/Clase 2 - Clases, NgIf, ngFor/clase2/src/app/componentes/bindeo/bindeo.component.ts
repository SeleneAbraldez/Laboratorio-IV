import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/Mascota/mascota';

@Component({
    selector: 'app-bindeo',
    templateUrl: './bindeo.component.html',
    styleUrls: ['./bindeo.component.css']
})
export class BindeoComponent implements OnInit {

    nombre: string;
    srcFoto: string;
    tipo: string;
    lista: Array<Mascota> = [];
    constructor() { }

    ngOnInit() {
        this.nombre = "";
        this.srcFoto = "https://animalesqueridos.com/wp-content/uploads/2016/04/Capibara-y-un-gato.jpg";
        this.tipo = "Animal";
    }

    public Tipo(tipo: string): void {
        if (tipo == "G") {
            this.srcFoto = "https://lelum.pl/wp-content/uploads/2020/02/kotki-2-238x178.jpg"
            this.tipo = "Gatitx";
        }else if (tipo == "A") {
            this.srcFoto = "https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/p960x960/88999788_3029130847137867_4300869745000841216_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=6kxyl_FQWVYAX_020pL&_nc_ht=scontent.faep8-1.fna&_nc_tp=6&oh=8e87708bc822ac8592bc52b6aaba0f52&oe=5EADD29A"
            this.tipo = "Axolote";
        }else {
            this.srcFoto = "https://i.pinimg.com/originals/e0/46/1a/e0461a008bcd4663724c84a5a87e9f13.jpg"
            this.tipo = "Nutria";
        }
    }

    public enviar(event): void {
        this.lista.push(new Mascota(this.nombre, this.srcFoto, this.tipo));
    }

    public sacarTurno(e) {
        console.log(e);
    }
}
