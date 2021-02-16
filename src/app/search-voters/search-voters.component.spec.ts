import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVotersComponent } from './search-voters.component';

describe('SearchVotersComponent', () => {
  let component: SearchVotersComponent;
  let fixture: ComponentFixture<SearchVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
