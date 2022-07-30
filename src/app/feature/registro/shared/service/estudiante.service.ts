import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from '../model/estudiante.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(protected httpClient: HttpClient) { }
  private endPoint = environment.baseUrl;

  crear(docente: Estudiante){
    return this.httpClient.post<Estudiante>(`${this.endPoint}/teachers/save`,docente);
  }

  listar(){
    return this.httpClient.get<Estudiante[]>(`${this.endPoint}/teachers`);
  }
}
