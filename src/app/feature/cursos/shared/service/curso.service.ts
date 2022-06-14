import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://localhost:8080/api';

  crear(curso: Curso){
    return this.httpClient.post<Curso>(`${this.endPoint}/Curso/save`,curso);
  }

  listarCursosPorDocenteId(idDocente: number){
    return this.httpClient.get<Curso[]>(`${this.endPoint}/Curso/docente/${idDocente}`);
  }
}
