import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  vehicleInTime= new Date();
  vehicleOutTime= new Date();

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: VehicleService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getVehicleById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.vehicle = data;
        this.updateForm = this.formBuilder.group({
          id: this.vehicle.id,
          numberPlate: this.vehicle.numberPlate,
        })
      },
      (err) => console.log(err)
    );
  }

onSubmit() {
  console.log(this.updateForm.value + "from onSubmit of upadte vehicleupdate component")
  const formValue=this.updateForm.value;
  console.log(this.vehicleInTime);
  // const vehicleInTime = new Date();
  // const vehicleOutTime = new Date();
  this.updateForm = this.formBuilder.group({    
  
  vehicleInTime: new FormControl(new Date(this.vehicleInTime).toISOString()),
  
  vehicleOutTime: new FormControl(new Date(this.vehicleOutTime).toISOString()),
});
  const data:any={
  "updatedByGuardId": Number(sessionStorage.getItem('id')),
  "vehicleInTime": this.vehicleInTime,
  "vehicleOutTime": this.vehicleOutTime
};
  this.service.updateVehicleUpdate(this.vehicle.id,data).subscribe(
    (        data: any) => {this.vehicle = data;
          this.router.navigate(['vehicles'])},
    (        err: any) => console.log(err)
  )
}
}
