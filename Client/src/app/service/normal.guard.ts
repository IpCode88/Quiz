import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouteReuseStrategy, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {
constructor(private login : LoginService,private route:Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.login.isLogged()  && this.login.getUserRoles() == 'NORMAL'){
        return true;
     }else{
         this.route.navigate(['login'])
           return true;
     }
  }
  
}
