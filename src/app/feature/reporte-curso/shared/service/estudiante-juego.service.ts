import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte } from '../model/reporte-estudiante.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteJuegoService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = environment.baseUrl;

  
  listarReporte(idReto:number){
    return this.httpClient.get<Reporte[]>(`${this.endPoint}/api/estudianteJuego/reporte/reto/${idReto}`);
  }

 
  
}

