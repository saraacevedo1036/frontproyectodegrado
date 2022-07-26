import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteGuard implements CanActivate {

  constructor( private router: Router,
    private autorizacionService: AutorizacionService ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.autorizacionService.esRolEstudiante()){
        return true;
      }
      return false; 
  }
  
}
