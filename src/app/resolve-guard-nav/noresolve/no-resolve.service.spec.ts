/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NoResolveService } from './no-resolve.service';

describe('Service: NoResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoResolveService]
    });
  });

  it('should ...', inject([NoResolveService], (service: NoResolveService) => {
    expect(service).toBeTruthy();
  }));
});
