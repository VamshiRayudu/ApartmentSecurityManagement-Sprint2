import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSecurityalertComponent } from './list-securityalert.component';

describe('ListSecurityalertComponent', () => {
  let component: ListSecurityalertComponent;
  let fixture: ComponentFixture<ListSecurityalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSecurityalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSecurityalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
