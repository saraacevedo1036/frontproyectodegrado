import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class EstudianteGuard implements CanActivate {

  constructor( private router: Router,
    private autorizacionService: AutorizacionService,  private location: Location ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.autorizacionService.esRolEstudiante()){
        return true;
      }
      this.location.back()
      this.sinAcceso()

      return false; 
  }
  
  sinAcceso(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No cuentas con los permisos necesarios para ingresar a esta pagina!',
    })
    

  }
}
