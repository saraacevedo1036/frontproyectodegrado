import { TestBed } from '@angular/core/testing';

import { EstudianteJuegoService } from './estudiante-juego.service';

describe('EstudianteJuegoService', () => {
  let service: EstudianteJuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteJuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
