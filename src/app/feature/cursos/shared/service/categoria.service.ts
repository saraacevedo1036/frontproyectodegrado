import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(protected httpClient: HttpClient) { }

  private endPoint = 'http://localhost:8080/api';

  listarCategoriasPorIdCurso(idCurso:number){
    return this.httpClient.get<Categoria[]>(`${this.endPoint}/categoria-contenido/curso/${idCurso}`);
  }
  guardarCategorias(categoria:Categoria):Observable<Categoria>{
    return this.httpClient.post<Categoria>(`${this.endPoint}/categoria-contenido/save`, categoria);
  }
}
