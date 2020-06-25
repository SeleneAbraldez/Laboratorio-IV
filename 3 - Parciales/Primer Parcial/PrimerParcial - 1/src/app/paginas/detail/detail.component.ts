import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../../servicios/http.service";
import { TitulosPipe } from "../../pipes/titulos.pipe";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  cardId: any;

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpService,
    private titulosPipe: TitulosPipe,
  ) { }

  ngOnInit(): void {
    // sacamos cuanto vale el id de carta del param de la url
    this.cardId = this.actRoute.snapshot.paramMap.get('id');
    // alert(this.cardId);
    this.http.getById(this.cardId)
    .subscribe((data:Array<any>)=>{ 
      // console.log(data)
      this.cardId = data;
    }, error=>{
      alert(error.message);
    });

  }

}
