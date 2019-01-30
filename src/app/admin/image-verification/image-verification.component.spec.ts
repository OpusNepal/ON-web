import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVerificationComponent } from './image-verification.component';

describe('ImageVerificationComponent', () => {
  let component: ImageVerificationComponent;
  let fixture: ComponentFixture<ImageVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
