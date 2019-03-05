import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotDeliveredArtsComponent } from './view-not-delivered-arts.component';

describe('ViewNotDeliveredArtsComponent', () => {
  let component: ViewNotDeliveredArtsComponent;
  let fixture: ComponentFixture<ViewNotDeliveredArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotDeliveredArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotDeliveredArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
