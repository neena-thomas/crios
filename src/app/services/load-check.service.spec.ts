import { TestBed } from '@angular/core/testing';

import { LoadCheckService } from './load-check.service';

describe('LoadCheckService', () => {
  let service: LoadCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
