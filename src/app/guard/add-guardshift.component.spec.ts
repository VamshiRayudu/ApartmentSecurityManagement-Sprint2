import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardshiftComponent } from './add-guardshift.component';

describe('AddGuardshiftComponent', () => {
  let component: AddGuardshiftComponent;
  let fixture: ComponentFixture<AddGuardshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuardshiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
