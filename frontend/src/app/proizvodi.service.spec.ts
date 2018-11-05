import { TestBed } from '@angular/core/testing';

import { ProizvodiService } from './proizvodi.service';

describe('ProizvodiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProizvodiService = TestBed.get(ProizvodiService);
    expect(service).toBeTruthy();
  });
});
