import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: string = "juan";
  password: string = "123";

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  public ingresar() {

    if (!this.user || !this.password) {
      alert("Ingrese los datos");
      return;
    }

    this.auth.createUserWithEmailAndPassword(this.user, this.password)
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
    
    // this.http.login(this.user, this.password)
    // .subscribe(data => {
    //   console.log(data);
    //   if (data['token']) {
    //     localStorage.setItem('token', data['token']);
    //     this.router.navigateByUrl('privada');
    //   }
    // });
  }

}
