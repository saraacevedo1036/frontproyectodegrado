import { TestBed } from '@angular/core/testing';

import { RetoService } from '../../../../shared/service/reto.service';

describe('RetoService', () => {
  let service: RetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
