import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  @Output() disparadorReto: EventEmitter<any> = new EventEmitter();
  @Output() disparadorJuego: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
