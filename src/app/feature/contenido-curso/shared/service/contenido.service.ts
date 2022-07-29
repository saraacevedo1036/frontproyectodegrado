import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenido } from '../model/contenido.model';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://cygnuspr.herokuapp.com/api';

  
  listarContenidoPorIdCategoriaYIdCurso(idCategoria:number,idCurso: number){
    return this.httpClient.get<Contenido[]>(`${this.endPoint}/curso-contenido/categoria-contenido/${idCategoria}/curso/${idCurso}`);
  }

  guardarContenido(contenido:Contenido):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/curso-contenido/save`, contenido);
  }
  eliminarContenido(idContenido:number):Observable<object>{
    return this.httpClient.delete<object>(`${this.endPoint}/curso-contenido/${idContenido}`);
  }
  
}
