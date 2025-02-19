import { TestBed } from '@angular/core/testing';

import { AuthorizationTokenService } from './authorization-token.service';

describe('AuthorizationTokenService', () => {
  let service: AuthorizationTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
