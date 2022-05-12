import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class SegurityGuard implements CanActivate{

  constructor(
    private router: Router,
    private autorizacionService: AutorizacionService 
  ) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('Esta autenticado: ',this.autorizacionService.estaAutenticado())
    if(this.autorizacionService.estaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
