import { TestBed } from '@angular/core/testing';

import { TipoMaquinaServiceService } from './tipo-maquina-service.service';

describe('TipoMaquinaServiceService', () => {
  let service: TipoMaquinaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMaquinaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
