import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from '../model/docente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(protected httpClient: HttpClient) { }
  private endPoint = environment.baseUrl;

  crear(docente: Docente){
    return this.httpClient.post<Docente>(`${this.endPoint}/students/save`,docente);
  }

  listar(){
    return this.httpClient.get<Docente[]>(`${this.endPoint}api/students`);
  }
}
