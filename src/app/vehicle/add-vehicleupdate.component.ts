import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../shared/Vehicleservice';
import { Vehicle } from './vehicle';
import { vehicleUpdate } from './vehicleUpdate';

@Component({
  selector: 'app-add-vehicleupdate',
  templateUrl: './add-vehicleupdate.component.html',
  styleUrls: ['./add-vehicleupdate.component.css']
})
export class AddVehicleupdateComponent implements OnInit {

  vehicle!: Vehicle;
  updateForm!: FormGroup;
  id: number = 0;
  vehicleUpdate!: vehicleUpdate;

  submitted = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: VehicleService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getVehicleById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.vehicle = data;
        this.updateForm = this.formBuilder.group({
          id: this.vehicle.id,
          numberPlate: this.vehicle.numberPlate,
          vehicleInTime: ['', Validators.required],
          vehicleOutTime: ['', Validators.required]
        })
      },
      (err) => console.log(err)
    );
  }

  /**
   * Form Validation
   */
  get f() {
    return this.updateForm.controls;
  }

  /**
   * On Submit Button
   * @returns 
   */
  onSubmit() {
    this.submitted = true;
    if (this.updateForm.invalid) {
      return;
    }
    console.log(this.updateForm.value + "from onSubmit of upadte vehicleupdate component")
    const formValue = this.updateForm.value;

    const data: any = {
      "updatedByGuardId": Number(sessionStorage.getItem('id')),
      "vehicleInTime": formValue.vehicleInTime,
      "vehicleOutTime": formValue.vehicleOutTime
    };
    this.service.updateVehicleUpdate(this.vehicle.id, data).subscribe(
      (data: any) => {
        this.toastr.success('Successfully Added');
        this.vehicle = data;
        this.router.navigate(['vehicles'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Vehicle Upadate Details: Invalid Status');
        console.log(err)
      }
    )
  }
}
