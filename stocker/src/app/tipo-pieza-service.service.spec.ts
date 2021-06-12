import { TestBed } from '@angular/core/testing';

import { TipoPiezaServiceService } from './tipo-pieza-service.service';

describe('TipoPiezaServiceService', () => {
  let service: TipoPiezaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPiezaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
