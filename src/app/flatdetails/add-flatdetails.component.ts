import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  submitted = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: FlatDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addFlatDetailsForm = this.formBuilder.group({
      floorNumber: ['', Validators.required],
      amount: '',
      aadharId: '',
      emailId: '',
      mobileNumber: '',
      name: '',
      isRented: ''
      // if(isRented)
    })
  }

  /**
   * Form Validation
   */
  get f() {
    return this.addFlatDetailsForm.controls;
  }

  /**
   * On Submit Method
   * @returns FlatDetails
   */
  onSubmit() {
    this.submitted = true;
    if (this.addFlatDetailsForm.invalid) {
      return;
    }
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
        (data) => {
          this.toastr.success('Successfully Added');
          this.flatDetails = data; this.router.navigate(['owners'])
        },
        (err) => {
          this.toastr.error('Failed to Add Flat Details: Invalid Status');
          console.log(err)
        }
      )
    // }

  }

}
