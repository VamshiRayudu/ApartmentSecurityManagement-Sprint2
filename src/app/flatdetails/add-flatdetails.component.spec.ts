import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlatdetailsComponent } from './add-flatdetails.component';

describe('AddFlatdetailsComponent', () => {
  let component: AddFlatdetailsComponent;
  let fixture: ComponentFixture<AddFlatdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlatdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlatdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
