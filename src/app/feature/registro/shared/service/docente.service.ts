import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from '../model/docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(protected httpClient: HttpClient) { }
  private endPoint = 'http://cygnuspr.herokuapp.com';

  crear(docente: Docente){
    return this.httpClient.post<Docente>(`${this.endPoint}/students/save`,docente);
  }

  listar(){
    return this.httpClient.get<Docente[]>(`${this.endPoint}/students`);
  }
}
