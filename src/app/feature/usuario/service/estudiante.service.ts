import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://localhost:8080/api';

  
  listarDocente(){
    return this.httpClient.get<Estudiante[]>(`docente`);
  }

  guardarestudiante(estudiante:Estudiante):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`estudiante/save`, estudiante);
  }
}
