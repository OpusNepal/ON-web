import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedArtComponent } from './customized-art.component';

describe('CustomizedArtComponent', () => {
  let component: CustomizedArtComponent;
  let fixture: ComponentFixture<CustomizedArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
