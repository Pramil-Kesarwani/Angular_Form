import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCustomerComponent } from './reactive-form-customer.component';

describe('ReactiveFormCustomerComponent', () => {
  let component: ReactiveFormCustomerComponent;
  let fixture: ComponentFixture<ReactiveFormCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
