import { TestBed } from '@angular/core/testing';

import { FacturaVentasService } from './factura-ventas.service';

describe('FacturaVentasService', () => {
  let service: FacturaVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
