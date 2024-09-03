import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTablesUpdateComponent } from './price-tables-update.component';

describe('PriceTablesUpdateComponent', () => {
  let component: PriceTablesUpdateComponent;
  let fixture: ComponentFixture<PriceTablesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceTablesUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceTablesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
