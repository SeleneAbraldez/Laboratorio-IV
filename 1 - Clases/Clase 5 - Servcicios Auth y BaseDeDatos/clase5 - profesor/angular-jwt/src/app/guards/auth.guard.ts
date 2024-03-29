import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    public jwtHelper: JwtHelperService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("AuthGuard")
    // const segmentos = token.split(".");
    // if(segmentos.length === 3 ){
    //   return true;
    // }
    // console.log(segmentos);
    try {
      //token en realidad deberia estar en un solo lugar, una vez ams es para salir del paso
      const token = localStorage.getItem('token');
      // console.log(this.jwtHelper.isTokenExpired());
      // console.log(this.jwtHelper.getTokenExpirationDate());
      const payload = this.jwtHelper.decodeToken(token);
      return true;
    } catch (error) {
      this.router.navigateByUrl("login");
      return false;
    }


  }

}
