import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    //una vez  mas, token no deberia estar hardc
    localStorage.setItem('token', null);
    this.router.navigateByUrl('publica');
  }

} 
