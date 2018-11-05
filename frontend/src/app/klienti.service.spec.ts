import { TestBed } from '@angular/core/testing';

import { KlientiService } from './klienti.service';

describe('KlientiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KlientiService = TestBed.get(KlientiService);
    expect(service).toBeTruthy();
  });
});
