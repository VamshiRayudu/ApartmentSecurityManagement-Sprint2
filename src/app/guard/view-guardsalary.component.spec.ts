import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardsalaryComponent } from './view-guardsalary.component';

describe('ViewGuardsalaryComponent', () => {
  let component: ViewGuardsalaryComponent;
  let fixture: ComponentFixture<ViewGuardsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuardsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
