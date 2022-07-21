import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { CreacionCurso } from '../model/creacion-curso.model';
import { Curso } from '../model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(protected httpClient: HttpClient,
              protected autorizacionService: AutorizacionService) {}

  private endPoint = 'http://localhost:8080/api';

  crear(curso: Curso){
    return this.httpClient.post<Curso>(`${this.endPoint}/curso/save`,curso);
  }
  guardarCurso(creacionCurso:CreacionCurso):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/curso/save`, creacionCurso);
  }
 

  listarCursosPorDocenteId(){
    let params = new HttpParams().set("email",this.autorizacionService.obtenerCorreo())
    .set("rolUsuario", this.autorizacionService.obtenerRol()); 
    return this.httpClient.get<Curso[]>(`${this.endPoint}/curso/obtener-segun-escenario`,{params:params});
  }
}
