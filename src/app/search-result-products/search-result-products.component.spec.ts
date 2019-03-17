import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultProductsComponent } from './search-result-products.component';

describe('SearchResultProductsComponent', () => {
  let component: SearchResultProductsComponent;
  let fixture: ComponentFixture<SearchResultProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
