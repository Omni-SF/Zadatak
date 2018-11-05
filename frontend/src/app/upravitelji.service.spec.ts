import { TestBed } from '@angular/core/testing';

import { UpraviteljiService } from './upravitelji.service';

describe('UpraviteljiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpraviteljiService = TestBed.get(UpraviteljiService);
    expect(service).toBeTruthy();
  });
});
