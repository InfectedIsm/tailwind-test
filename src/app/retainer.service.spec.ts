import { TestBed } from '@angular/core/testing';

import { RetainerService } from './retainer.service';

describe('RetainerService', () => {
  let service: RetainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
