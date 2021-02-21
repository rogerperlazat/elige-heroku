import { TestBed } from '@angular/core/testing';

import { CorporationsService } from './corporations.service';

describe('CorporationsService', () => {
  let service: CorporationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
