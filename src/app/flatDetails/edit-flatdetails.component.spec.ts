import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlatdetailsComponent } from './edit-flatdetails.component';

describe('EditFlatdetailsComponent', () => {
  let component: EditFlatdetailsComponent;
  let fixture: ComponentFixture<EditFlatdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlatdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlatdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
