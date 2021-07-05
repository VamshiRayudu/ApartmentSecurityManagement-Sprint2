import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardshiftComponent } from './view-guardshift.component';

describe('ViewGuardshiftComponent', () => {
  let component: ViewGuardshiftComponent;
  let fixture: ComponentFixture<ViewGuardshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuardshiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
