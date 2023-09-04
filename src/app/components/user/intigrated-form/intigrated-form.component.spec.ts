import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntigratedFormComponent } from './intigrated-form.component';

describe('IntigratedFormComponent', () => {
  let component: IntigratedFormComponent;
  let fixture: ComponentFixture<IntigratedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntigratedFormComponent]
    });
    fixture = TestBed.createComponent(IntigratedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
