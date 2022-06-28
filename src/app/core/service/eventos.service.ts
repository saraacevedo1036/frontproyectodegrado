import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
