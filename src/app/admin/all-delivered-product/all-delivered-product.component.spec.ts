import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliveredProductComponent } from './all-delivered-product.component';

describe('AllDeliveredProductComponent', () => {
  let component: AllDeliveredProductComponent;
  let fixture: ComponentFixture<AllDeliveredProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDeliveredProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliveredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
