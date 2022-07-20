import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte } from '../model/reporte-estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteJuegoService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://localhost:8080/api';

  
  listarReporte(idReto:number){
    return this.httpClient.get<Reporte[]>(`${this.endPoint}/estudianteJuego/reporte/reto/${idReto}`);
  }

 
  
}

