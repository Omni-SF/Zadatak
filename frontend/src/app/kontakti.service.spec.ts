import { TestBed } from '@angular/core/testing';

import { KontaktiService } from './kontakti.service';

describe('KontaktiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KontaktiService = TestBed.get(KontaktiService);
    expect(service).toBeTruthy();
  });
});
