import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-privada',
  templateUrl: './privada.component.html',
  styleUrls: ['./privada.component.css']
})
export class PrivadaComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getClientes()
    .subscribe(data => {
      console.log(data);
    })
  }

}
