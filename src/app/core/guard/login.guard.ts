import { Injectable } from '@angular/core';
import {  CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private autorizacionService: AutorizacionService)
  { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.autorizacionService.estaAutenticado();
  }
  
}
