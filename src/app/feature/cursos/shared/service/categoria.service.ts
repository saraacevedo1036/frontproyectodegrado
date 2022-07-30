import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(protected httpClient: HttpClient) { }

  private endPoint = environment.baseUrl;

  listarCategoriasPorIdCurso(idCurso:number){
    return this.httpClient.get<Categoria[]>(`${this.endPoint}/api/categoria-contenido/curso/${idCurso}`);
  }
  guardarCategorias(categoria:Categoria):Observable<Categoria>{
    return this.httpClient.post<Categoria>(`${this.endPoint}/api/categoria-contenido/save`, categoria);
  }
}
