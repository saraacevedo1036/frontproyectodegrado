import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://cygnuspr.herokuapp.com/api';

  
  listarEstudianteId(idCurso:number){
    return this.httpClient.get<Estudiante[]>(`${this.endPoint}/estudiante/curso/${idCurso}`);
  }

  guardarEstudiante(docente:Estudiante):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/estudiante/save`, docente);
  }
  
}

