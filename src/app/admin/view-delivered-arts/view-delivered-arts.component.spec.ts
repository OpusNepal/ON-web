import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveredArtsComponent } from './view-delivered-arts.component';

describe('ViewDeliveredArtsComponent', () => {
  let component: ViewDeliveredArtsComponent;
  let fixture: ComponentFixture<ViewDeliveredArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeliveredArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeliveredArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
