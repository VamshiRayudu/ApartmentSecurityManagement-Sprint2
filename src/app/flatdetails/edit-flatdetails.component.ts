import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../owner/owner';
import { FlatDetailsService } from '../shared/flatDetailsService';
import { FlatDetails } from './flatdetails';

@Component({
  selector: 'app-edit-flatdetails',
  templateUrl: './edit-flatdetails.component.html',
  styleUrls: ['./edit-flatdetails.component.css']
})
export class EditFlatdetailsComponent implements OnInit {

  flatDetails!: FlatDetails;
  id: number = 0;
  updateFlatRentalsForm!: FormGroup;
  owner!: Owner;
  public isRented: boolean = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: FlatDetailsService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.updateFlatRentalsForm = this.formBuilder.group({
      amount: ['', Validators.required],
      aadharId: ['', Validators.required],
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.updateFlatRentalsForm.value + "from onSubmit of add flatDetails component")
    const formValue = this.updateFlatRentalsForm.value;
    // if (this.isRented) {
      const updateRent: any = {
        "flatRent": {
          "amount": formValue.amount,
          "rentals": {
            "aadharId": formValue.aadharId,
            "emailId": formValue.emailId,
            "mobileNumber": formValue.mobileNumber,
            "name": formValue.name
          }
        }
      };
      this.service.updateFlatDetails(this.id,updateRent).
        subscribe(
          (data) => { this.flatDetails = data; this.router.navigate(['flatDetails']) },
          (err) => console.log(err)
        )
      // }
    
  }
}
