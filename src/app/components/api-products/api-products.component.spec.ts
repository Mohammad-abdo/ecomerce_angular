import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProductsComponent } from './api-products.component';

describe('ApiProductsComponent', () => {
  let component: ApiProductsComponent;
  let fixture: ComponentFixture<ApiProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiProductsComponent]
    });
    fixture = TestBed.createComponent(ApiProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
