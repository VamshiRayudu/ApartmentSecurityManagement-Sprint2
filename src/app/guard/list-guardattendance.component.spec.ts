import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuardattendanceComponent } from './list-guardattendance.component';

describe('ListGuardattendanceComponent', () => {
  let component: ListGuardattendanceComponent;
  let fixture: ComponentFixture<ListGuardattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGuardattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuardattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
