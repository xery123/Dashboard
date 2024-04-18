import { TestBed } from '@angular/core/testing';

import { MessageEngineService } from './message-engine.service';

describe('MessageEngineService', () => {
  let service: MessageEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
