import { TestBed } from '@angular/core/testing';

import { LateHistoryService } from './late-history.service';

describe('LateHistoryService', () => {
  let service: LateHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LateHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
