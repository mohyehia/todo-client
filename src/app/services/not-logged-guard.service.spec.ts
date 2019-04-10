import { TestBed } from '@angular/core/testing';

import { NotLoggedGuardService } from './not-logged-guard.service';

describe('NotLoggedGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotLoggedGuardService = TestBed.get(NotLoggedGuardService);
    expect(service).toBeTruthy();
  });
});
