import { TestBed } from '@angular/core/testing';

import { OfertServiceService } from './ofert-service.service';

describe('OfertServiceService', () => {
  let service: OfertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
