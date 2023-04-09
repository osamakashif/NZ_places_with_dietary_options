import { TestBed } from '@angular/core/testing';

import { CreatePlaceService } from './create-place.service';

describe('CreatePlaceService', () => {
  let service: CreatePlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
