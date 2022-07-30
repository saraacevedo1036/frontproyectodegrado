import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { CreacionCurso } from '../model/creacion-curso.model';
import { Curso } from '../model/curso.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(protected httpClient: HttpClient,
              protected autorizacionService: AutorizacionService) {}

  private endPoint = environment.baseUrl;

  crear(curso: Curso){
    return this.httpClient.post<Curso>(`${this.endPoint}/api/curso/save`,curso);
  }

  guardarCurso(creacionCurso:CreacionCurso):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/api/curso/save`, creacionCurso);
  }
 
  listarCursosPorDocenteId(){
    let params = new HttpParams().set("email",this.autorizacionService.obtenerCorreo())
    .set("rolUsuario", this.autorizacionService.obtenerRol()); 
    return this.httpClient.get<Curso[]>(`${this.endPoint}/api/curso/obtener-segun-escenario`,{params:params});
  }

  obtenerCursoPorId(idCurso:number){
    return this.httpClient.get<Curso>(`${this.endPoint}/api/curso/${idCurso}`);
  }
}
