import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenido } from '../model/contenido.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = environment.baseUrl;

  
  listarContenidoPorIdCategoriaYIdCurso(idCategoria:number,idCurso: number){
    return this.httpClient.get<Contenido[]>(`${this.endPoint}/api/curso-contenido/categoria-contenido/${idCategoria}/curso/${idCurso}`);
  }

  guardarContenido(contenido:Contenido):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/api/curso-contenido/save`, contenido);
  }

  actualizarContenido(contenido:Contenido):Observable<Boolean>{
    return this.httpClient.put<Boolean>(`${this.endPoint}/api/curso-contenido/actualizar`, contenido);
  }

  eliminarContenido(idContenido:number):Observable<object>{
    return this.httpClient.delete<object>(`${this.endPoint}/api/curso-contenido/${idContenido}`);
  }
  
}
