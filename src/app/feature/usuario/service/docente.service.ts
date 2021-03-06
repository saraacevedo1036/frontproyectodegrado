import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../model/docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = 'http://localhost:8080/api';

  
  listarDocente(){
    return this.httpClient.get<Docente[]>(`${this.endPoint}/docente`);
  }

  guardarDocente(docente:Docente):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}/docente/save`, docente);
  }
  
}

