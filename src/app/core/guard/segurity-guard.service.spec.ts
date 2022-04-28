import { TestBed } from '@angular/core/testing';

import { SegurityGuard } from './segurity-guard.service';

describe('SegurityGuardService', () => {
  let service: SegurityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegurityGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
