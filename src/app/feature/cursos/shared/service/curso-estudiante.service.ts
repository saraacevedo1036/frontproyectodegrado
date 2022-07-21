import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { AsignarCurso } from '../model/estudiante-curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoEstudianteService {

  constructor(protected httpClient: HttpClient,
              protected autorizacionService: AutorizacionService) {}

  private endPoint = 'http://localhost:8080/api';

  
  asignarCurso(asignarCurso:AsignarCurso):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/curso-estudiante/save`, asignarCurso);
  }
 

  
}
