import { TestBed } from '@angular/core/testing';

import { VlasniciService } from './vlasnici.service';

describe('VlasniciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VlasniciService = TestBed.get(VlasniciService);
    expect(service).toBeTruthy();
  });
});
