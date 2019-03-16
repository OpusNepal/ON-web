import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUndeliveredProductComponent } from './all-undelivered-product.component';

describe('AllUndeliveredProductComponent', () => {
  let component: AllUndeliveredProductComponent;
  let fixture: ComponentFixture<AllUndeliveredProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUndeliveredProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUndeliveredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
