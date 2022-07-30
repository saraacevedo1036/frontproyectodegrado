import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../model/docente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(protected httpClient: HttpClient) {}

  private endPoint = environment.baseUrl;

  
  listarDocente(){
    return this.httpClient.get<Docente[]>(`${this.endPoint}api/docente`);
  }

  guardarDocente(docente:Docente):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.endPoint}api/docente/save`, docente);
  }
  
}

