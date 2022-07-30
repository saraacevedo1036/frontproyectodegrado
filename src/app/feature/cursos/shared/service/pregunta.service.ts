import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../model/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private endPoint = 'http://localhost:8080/api';
  constructor(protected httpClient: HttpClient)
   { }

  listarPorIdReto( idReto:number){
    return this.httpClient.get<Pregunta[]>(`${this.endPoint}/pregunta/reto/${idReto}`);
  }
 
}

