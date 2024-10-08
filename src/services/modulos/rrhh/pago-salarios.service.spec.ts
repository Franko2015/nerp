import { TestBed } from '@angular/core/testing';

import { PagoSalariosService } from './pago-salarios.service';

describe('PagoSalariosService', () => {
  let service: PagoSalariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoSalariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
