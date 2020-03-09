import { TestBed } from '@angular/core/testing';

import { PhysicalService } from './physical.service';

describe('PhysicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhysicalService = TestBed.get(PhysicalService);
    expect(service).toBeTruthy();
  });
});
