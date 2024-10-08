import { TestBed } from '@angular/core/testing';

import { StockInsumosService } from './stock-insumos.service';

describe('StockInsumosService', () => {
  let service: StockInsumosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockInsumosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
