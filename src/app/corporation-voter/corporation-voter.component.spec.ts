import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationVoterComponent } from './corporation-voter.component';

describe('CorporationVoterComponent', () => {
  let component: CorporationVoterComponent;
  let fixture: ComponentFixture<CorporationVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporationVoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporationVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
