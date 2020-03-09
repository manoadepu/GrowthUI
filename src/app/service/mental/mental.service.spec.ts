import { TestBed } from '@angular/core/testing';

import { MentalService } from './mental.service';

describe('MentalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentalService = TestBed.get(MentalService);
    expect(service).toBeTruthy();
  });
});
