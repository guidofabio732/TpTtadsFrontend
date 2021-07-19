import { TestBed } from '@angular/core/testing';

import { MaquinasPiezasService } from './maquinas-piezas.service';

describe('MaquinasPiezasService', () => {
  let service: MaquinasPiezasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinasPiezasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
