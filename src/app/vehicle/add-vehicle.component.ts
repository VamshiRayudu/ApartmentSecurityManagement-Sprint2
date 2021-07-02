import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from './vehicle';
import { FlatDetails } from '../flatdetails/flatdetails';
import { Owner } from '../owner/owner';
import { VehicleService } from '../shared/Vehicleservice';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle!: Vehicle;
  id: number = 0;
  addVehicleForm!: FormGroup;
  flatDetails!: FlatDetails;
  owner!: Owner;
  
  constructor(private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: VehicleService) { }

  ngOnInit(): void {
    this.addVehicleForm = this.formBuilder.group({
      numberPlate: ['', Validators.required, Validators.minLength(8)],
      vehicleColour: ['', Validators.required],
      flatNumber: ['',Validators.required],
      id: ['',Validators.required]
  })
  }

  onSubmit() {
    console.log(this.addVehicleForm.value + "from onSubmit of add customer component")
    const formValue=this.addVehicleForm.value;
    const data:any={"flatDetails": {
      "flatNumber": Number(formValue.flatNumber)
    },
    "numberPlate": formValue.numberPlate,
    
    "vehicleColour": formValue.vehicleColour,
  
    "owner": {
      "id": Number(sessionStorage.getItem('id'))
    }
  };
    this.service.addVehicle(data).subscribe(
      (        data: any) => {this.vehicle = data;
            this.router.navigate(['vehicles'])},
      (        err: any) => console.log(err)
    )
}

}
