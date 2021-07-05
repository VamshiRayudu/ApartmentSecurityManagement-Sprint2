import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../shared/deliveryService';
import { Delivery } from './delivery';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

  delivery!: Delivery;
  id: number = 0;
  addDeliveryForm!: FormGroup;

  // flatDetails!: FlatDetails;
  // owner!: Owner;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: DeliveryService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addDeliveryForm = this.formBuilder.group({
      deliveryDateTime: ['', Validators.required],
      status: ['', Validators.required],
      flatNumber: ['', Validators.required],
      guardId: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.addDeliveryForm.value + "from onSubmit of add delivery component")

    console.log(this.addDeliveryForm.value.flatNumber);
    const formValue = this.addDeliveryForm.value;
    this.service.addDelivery(Number(this.id), Number(sessionStorage.getItem('id')), this.addDeliveryForm.value).subscribe(
      (data: Delivery) => {
        this.delivery = data;
        this.router.navigate(['flatDetails'])
      },
      (err: any) => console.log(err)
    )
  }

}
