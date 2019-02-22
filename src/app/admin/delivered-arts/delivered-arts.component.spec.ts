import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredArtsComponent } from './delivered-arts.component';

describe('DeliveredArtsComponent', () => {
  let component: DeliveredArtsComponent;
  let fixture: ComponentFixture<DeliveredArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
