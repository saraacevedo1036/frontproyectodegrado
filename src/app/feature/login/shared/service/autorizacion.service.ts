import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Autenticacion } from '../model/autenticacion.model';
import { Autorizacion } from '../model/autorizacion.model';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  private endPoint = 'http://localhost:8080';
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  login(autenticacion:Autenticacion): Observable<boolean>{
    console.log('autenticacion',autenticacion)
   return this.httpClient.post<Autorizacion>(`${this.endPoint}/auth/authenticate`,autenticacion).pipe(map(data =>{
      this.localStorageService.store('jwt',data.jwt);
      this.localStorageService.store('scope',data.scope);
      this.localStorageService.store('sub',data.sub);
      return true; 
    }));
  }

  estaAutenticado(): Boolean{
    return this.localStorageService.retrieve('jwt') != null;
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
   
}
