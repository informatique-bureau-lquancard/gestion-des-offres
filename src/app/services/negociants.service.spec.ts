import { TestBed } from '@angular/core/testing';

import { NegociantsService } from './negociants.service';

describe('NegociantsService', () => {
  let service: NegociantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegociantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
