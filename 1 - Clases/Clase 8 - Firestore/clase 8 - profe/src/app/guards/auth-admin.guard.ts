import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor (private router: Router, public jwtHelper: JwtHelperService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Guard AuthAdminGuard')
      try {
        const token = localStorage.getItem('token');

        const payload = this.jwtHelper.decodeToken(token);

        if (payload.nivel === "admin")  {
          
          return true;
        }

        throw Error('Nivel erroneo');

      } catch (error) {
        this.router.navigateByUrl("login");
        return false;
      }

  }
  
}
