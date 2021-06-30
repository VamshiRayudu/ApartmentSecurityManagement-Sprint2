import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleupdateComponent } from './add-vehicleupdate.component';

describe('AddVehicleupdateComponent', () => {
  let component: AddVehicleupdateComponent;
  let fixture: ComponentFixture<AddVehicleupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
