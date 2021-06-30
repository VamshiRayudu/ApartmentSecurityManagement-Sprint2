import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlatdetailsComponent } from './list-flatdetails.component';

describe('ListFlatdetailsComponent', () => {
  let component: ListFlatdetailsComponent;
  let fixture: ComponentFixture<ListFlatdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFlatdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFlatdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
