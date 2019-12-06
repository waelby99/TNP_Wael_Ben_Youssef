import { TestBed } from '@angular/core/testing';

import { WaoulService } from './waoul.service';

describe('WaoulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaoulService = TestBed.get(WaoulService);
    expect(service).toBeTruthy();
  });
});
