import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contenido } from '../model/contenido.model';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://localhost:8080/api';

  
  listarContenidoPorIdCategoriaYIdCurso(idCategoria:number,idCurso: number){
    return this.httpClient.get<Contenido[]>(`${this.endPoint}/curso-contenido/categoria-contenido/${idCategoria}/curso/${idCurso}`);
  }
}
