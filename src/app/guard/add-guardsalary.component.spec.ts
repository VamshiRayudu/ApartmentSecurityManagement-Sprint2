import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardsalaryComponent } from './add-guardsalary.component';

describe('AddGuardsalaryComponent', () => {
  let component: AddGuardsalaryComponent;
  let fixture: ComponentFixture<AddGuardsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuardsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
