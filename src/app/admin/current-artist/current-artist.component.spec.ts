import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentArtistComponent } from './current-artist.component';

describe('CurrentArtistComponent', () => {
  let component: CurrentArtistComponent;
  let fixture: ComponentFixture<CurrentArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
