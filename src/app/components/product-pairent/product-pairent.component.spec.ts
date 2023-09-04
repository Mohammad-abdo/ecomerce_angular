import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPairentComponent } from './product-pairent.component';

describe('ProductPairentComponent', () => {
  let component: ProductPairentComponent;
  let fixture: ComponentFixture<ProductPairentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPairentComponent]
    });
    fixture = TestBed.createComponent(ProductPairentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
