import { TestBed } from '@angular/core/testing';

import { PlanificacionRiegosService } from './planificacion-riegos.service';

describe('PlanificacionRiegosService', () => {
  let service: PlanificacionRiegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanificacionRiegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
