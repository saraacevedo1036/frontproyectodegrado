import { TestBed } from '@angular/core/testing';

import { EstudianteJuegoRespuestaService } from './estudiante-juego-respuesta.service';

describe('EstudianteJuegoRespuestaService', () => {
  let service: EstudianteJuegoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteJuegoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
