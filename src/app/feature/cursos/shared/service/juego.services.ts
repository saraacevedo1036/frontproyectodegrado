import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreacionReto } from '../model/creacion-reto.model';
import { Juego } from '../model/juego.model';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private endPoint = 'http://localhost:8080/api';
  constructor(protected httpClient: HttpClient)
   { }

  listarPorIdCursoYTipo(idCurso:number, tipo:string){
    return this.httpClient.get<Juego[]>(`${this.endPoint}/reto/curso/${idCurso}/tipo/${tipo}`);
  }
  guardarJuego(creacionReto:CreacionReto):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/reto/save/creacion-reto`, creacionReto);
  }
}
