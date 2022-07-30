import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { EstudianteJuegoRespuesta } from '../model/estudiante-juego.respuesta.model';
import { RespuestasReto } from '../model/respuestas-reto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteJuegoRespuestaService {

constructor(protected httpClient: HttpClient,
    protected autorizacionService: AutorizacionService) {}

private endPoint = environment.baseUrl;

calificar(respuestasReto: RespuestasReto){
  return this.httpClient.post<EstudianteJuegoRespuesta>(`${this.endPoint}/api/estudianteJuegoRespuestas/resultado-reto`,respuestasReto);
 }
}
