import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardattendanceComponent } from './add-guardattendance.component';

describe('AddGuardattendanceComponent', () => {
  let component: AddGuardattendanceComponent;
  let fixture: ComponentFixture<AddGuardattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuardattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
