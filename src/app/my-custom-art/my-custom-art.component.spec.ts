import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomArtComponent } from './my-custom-art.component';

describe('MyCustomArtComponent', () => {
  let component: MyCustomArtComponent;
  let fixture: ComponentFixture<MyCustomArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
