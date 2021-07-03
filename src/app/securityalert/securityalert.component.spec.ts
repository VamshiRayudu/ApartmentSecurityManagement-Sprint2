import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityalertComponent } from './securityalert.component';

describe('SecurityalertComponent', () => {
  let component: SecurityalertComponent;
  let fixture: ComponentFixture<SecurityalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
