import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomestichelpattendanceComponent } from './add-domestichelpattendance.component';

describe('AddDomestichelpattendanceComponent', () => {
  let component: AddDomestichelpattendanceComponent;
  let fixture: ComponentFixture<AddDomestichelpattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomestichelpattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDomestichelpattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
