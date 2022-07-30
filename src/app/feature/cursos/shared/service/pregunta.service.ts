import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../model/pregunta.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private endPoint = environment.baseUrl;
  constructor(protected httpClient: HttpClient)
   { }

  listarPorIdReto( idReto:number){
    return this.httpClient.get<Pregunta[]>(`${this.endPoint}/api/pregunta/reto/${idReto}`);
  }
 
}

