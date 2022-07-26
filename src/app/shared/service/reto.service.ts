import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reto } from '../../feature/cursos/shared/model/reto.model';

@Injectable({
  providedIn: 'root'
})
export class RetoService {

  private endPoint = 'http://localhost:8080/api';
  constructor(protected httpClient: HttpClient)
   { }

  listarPorIdCursoYTipo(idCurso:number, tipo:string){
    return this.httpClient.get<Reto[]>(`${this.endPoint}/reto/curso/${idCurso}/tipo/${tipo}`);
  }
  eliminarReto(idReto:number):Observable<object>{
    return this.httpClient.delete<object>(`${this.endPoint}/reto/${idReto}`);
  }
}
