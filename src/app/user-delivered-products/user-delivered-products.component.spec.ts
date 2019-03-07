import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeliveredProductsComponent } from './user-delivered-products.component';

describe('UserDeliveredProductsComponent', () => {
  let component: UserDeliveredProductsComponent;
  let fixture: ComponentFixture<UserDeliveredProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeliveredProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeliveredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
