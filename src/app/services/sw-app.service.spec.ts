import { TestBed } from '@angular/core/testing';

import { SwAppService } from './sw-app.service';

describe('SwAppService', () => {
  let service: SwAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
