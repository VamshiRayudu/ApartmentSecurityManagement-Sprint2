import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomestichelpattendanceComponent } from './list-domestichelpattendance.component';

describe('ListDomestichelpattendanceComponent', () => {
  let component: ListDomestichelpattendanceComponent;
  let fixture: ComponentFixture<ListDomestichelpattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDomestichelpattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomestichelpattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
