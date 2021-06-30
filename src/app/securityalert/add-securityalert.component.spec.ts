import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurityalertComponent } from './add-securityalert.component';

describe('AddSecurityalertComponent', () => {
  let component: AddSecurityalertComponent;
  let fixture: ComponentFixture<AddSecurityalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecurityalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecurityalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
