import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../owner/owner';
import { FlatDetailsService } from '../shared/flatDetailsService';
import { FlatDetails } from './flatdetails';

@Component({
  selector: 'app-add-flatdetails',
  templateUrl: './add-flatdetails.component.html',
  styleUrls: ['./add-flatdetails.component.css']
})
export class AddFlatdetailsComponent implements OnInit {

  flatDetails!: FlatDetails;
  id: number = 0;
  addFlatDetailsForm!: FormGroup;
  owner!: Owner;
  public isRented: boolean = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: FlatDetailsService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addFlatDetailsForm = this.formBuilder.group({
      floorNumber: ['', Validators.required],
      amount: ['', Validators.required],
      aadharId: ['', Validators.required],
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      name: ['', Validators.required],
      isRented: ['', Validators.required]
      // if(isRented)
    })
  }

  onSubmit() {
    console.log(this.addFlatDetailsForm.value + "from onSubmit of add flatDetails component")
    const formValue = this.addFlatDetailsForm.value;
    // if (this.isRented) {
      const flatWithRent: any = {
        "floorNumber": formValue.floorNumber,
        "flatRent": {
          "amount": formValue.amount,
          "rentals": {
            "aadharId": formValue.aadharId,
            "emailId": formValue.emailId,
            "mobileNumber": formValue.mobileNumber,
            "name": formValue.name
          }
        },
        "isRented": this.isRented,
        "owner": {
          "id": this.id
        }
      };
      this.service.addFlatDetails(flatWithRent).
        subscribe(
          (data) => { this.flatDetails = data; this.router.navigate(['owners']) },
          (err) => console.log(err)
        )
      // }
    
  }

}
