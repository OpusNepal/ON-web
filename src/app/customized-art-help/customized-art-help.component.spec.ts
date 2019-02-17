import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedArtHelpComponent } from './customized-art-help.component';

describe('CustomizedArtHelpComponent', () => {
  let component: CustomizedArtHelpComponent;
  let fixture: ComponentFixture<CustomizedArtHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedArtHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedArtHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
