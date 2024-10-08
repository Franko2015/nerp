import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierosComponent } from './financieros.component';

describe('FinancierosComponent', () => {
  let component: FinancierosComponent;
  let fixture: ComponentFixture<FinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancierosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
