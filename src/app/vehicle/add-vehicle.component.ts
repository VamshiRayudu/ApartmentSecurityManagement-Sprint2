import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from './vehicle';
import { FlatDetails } from '../flatdetails/flatdetails';
import { Owner } from '../owner/owner';
import { VehicleService } from '../shared/Vehicleservice';
import { ToastrService } from 'ngx-toastr';

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

  submitted = false; 

  constructor(private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: VehicleService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addVehicleForm = this.formBuilder.group({
      numberPlate: ['', Validators.required],
      vehicleColour: ['', Validators.required],
      flatNumber: ['', Validators.required]
    })
  }

  get f() {
    return this.addVehicleForm.controls ;
  }

  onSubmit() {
    this.submitted = true;
    if(this.addVehicleForm.invalid) 
    {
      return ;
    }
    console.log(this.addVehicleForm.value + "from onSubmit of add customer component")
    const formValue = this.addVehicleForm.value;
    const data: any = {
      "flatDetails": {
        "flatNumber": Number(formValue.flatNumber)
      },
      "numberPlate": formValue.numberPlate,

      "vehicleColour": formValue.vehicleColour,

      "owner": {
        "id": Number(sessionStorage.getItem('id'))
      }
    };
    this.service.addVehicle(data).subscribe(
      (data: any) => {
        this.toastr.success('Successfully Added');
        this.vehicle = data;
        this.router.navigate(['vehicles'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Vehicle Details: Invalid Status');
        console.log(err)
      }
    )
  }


  // alphabetValidator(control: FormControl) {  (1)
  //     let numberPlate = control.value;
  //     if(numberPlate && numberPlate.length <= 0)
  //     {
  //       return {
  //         alphabetError: {
  //           enteredNumberPlate: numberPlate
  //         }
  //       }
  //     }
  //     return null;
  // }

}
