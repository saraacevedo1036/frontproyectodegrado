import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Autenticacion } from '../model/autenticacion.model';
import { Autorizacion } from '../model/autorizacion.model';
import { LocalStorageService } from 'ngx-webstorage';
import { RestablecerContrasena } from '../model/restablecer-contrasena.model';
import { CambioContrasena } from 'src/app/shared/model/cambio-contrasena.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  ROLE_DOCENTE:string = "ROLE_DOCENTE"
  ROLE_ESTUDIANTE:string = "ROLE_ESTUDIANTE"

  private endPoint = environment.baseUrl;
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  login(autenticacion:Autenticacion): Observable<boolean>{
    this.limpiarLocalStorage();
   return this.httpClient.post<Autorizacion>(`${this.endPoint}/auth/authenticate`,autenticacion).pipe(map(data =>{
     this.cargarLocalStorage(data);
      return true; 
    }));
  }

  restablecerContrasena(restablecerContrasena:RestablecerContrasena): Observable<boolean>{
      return this.httpClient.post<boolean>(`${this.endPoint}/auth/recuperar-password`, restablecerContrasena);
  }

  
  cambioContrasena(cambioContrasena:CambioContrasena): Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.endPoint}/auth/cambio-password`, cambioContrasena);
 }


  estaAutenticado(): boolean{
    return this.localStorageService.retrieve('jwt') != null;
  }
  noEstaAutenticado(): boolean{
    return this.localStorageService.retrieve('jwt') == null;
  }

  obtenerToken(): string{
    return this.localStorageService.retrieve('jwt');
  }

  obtenerRol(): string{
     return this.localStorageService.retrieve('scope');
   }

   obtenerCorreo(): string{
     return this.localStorageService.retrieve('sub');
   }

   cargarLocalStorage(data: Autorizacion){
    this.localStorageService.store('jwt',data.jwt);
    this.localStorageService.store('scope',data.scope);
    this.localStorageService.store('sub',data.sub);
   }

   esRolDocente():boolean{
    return  this.obtenerRol() === this.ROLE_DOCENTE;
  }

  esRolEstudiante():boolean{
    return  this.obtenerRol() === this.ROLE_ESTUDIANTE;
  }

   limpiarLocalStorage(): void{
    this.localStorageService.clear('jwt')
    this.localStorageService.clear('scope')
    this.localStorageService.clear('sub')
   }

   
}
