import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryService } from '../shared/deliveryService';
import { Delivery } from './delivery';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

  statusData: any[] = ['RECEIVED', 'PICKEDUP', 'NOTPICKEDUP']
  delivery!: Delivery;
  id: number = 0;
  addDeliveryForm!: FormGroup;

  submitted = false;

  // flatDetails!: FlatDetails;
  // owner!: Owner;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: DeliveryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addDeliveryForm = this.formBuilder.group({
      deliveryDateTime: ['', Validators.required],
      status: ''
      // flatNumber: ['', Validators.required],
      // guardId: ['', Validators.required]
    })
  }

  /**
   * Form Validation
   */
  get f() {
    return this.addDeliveryForm.controls;
  }


  /**
   * on Submit Button
   * @returns Delivery
   */
  onSubmit() {
    this.submitted = true;
    if (this.addDeliveryForm.invalid) {
      return;
    }
    console.log(this.addDeliveryForm.value + "from onSubmit of add delivery component")

    console.log(this.addDeliveryForm.value.flatNumber);
    const formValue = this.addDeliveryForm.value;
    this.service.addDelivery(Number(this.id), Number(sessionStorage.getItem('id')), this.addDeliveryForm.value).subscribe(
      (data: Delivery) => {
        this.toastr.success('Successfully Added');
        this.delivery = data;
        this.router.navigate(['flatDetails'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Delivery Details: Invalid Status');
        console.log(err)
      }
    )
  }

}
