import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDeliveredArtsComponent } from './not-delivered-arts.component';

describe('NotDeliveredArtsComponent', () => {
  let component: NotDeliveredArtsComponent;
  let fixture: ComponentFixture<NotDeliveredArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotDeliveredArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDeliveredArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
