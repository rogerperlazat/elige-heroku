import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosfooterComponent } from './posfooter.component';

describe('PosfooterComponent', () => {
  let component: PosfooterComponent;
  let fixture: ComponentFixture<PosfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
