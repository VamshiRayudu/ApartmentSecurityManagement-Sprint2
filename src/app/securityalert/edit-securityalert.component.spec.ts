import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecurityalertComponent } from './edit-securityalert.component';

describe('EditSecurityalertComponent', () => {
  let component: EditSecurityalertComponent;
  let fixture: ComponentFixture<EditSecurityalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSecurityalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSecurityalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
