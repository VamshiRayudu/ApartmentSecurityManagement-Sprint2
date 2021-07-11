import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryService } from '../shared/deliveryService';
import { Delivery } from './delivery';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {

  statusData: any[] = ['RECEIVED', 'PICKEDUP', 'NOTPICKEDUP']
  delivery!: Delivery;
  id: number = 0;
  updateDeliveryForm!: FormGroup;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: DeliveryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getDeliveryById(this.id).subscribe(
      (data: Delivery) => {
        console.log(data);
        this.delivery = data;
        this.updateDeliveryForm = this.formBuilder.group({
          status: ['', Validators.required]
        })
      },
      (err: any) => console.log(err)
    );
  }

  /**
   * On Submit Button 
   */
  onSubmit() {
    console.log(this.updateDeliveryForm.value + "from onSubmit of update delivery component")
    const formValue = this.updateDeliveryForm.value;
    const data: any = {
      "deliveryId": this.delivery.deliveryId,

      "status": formValue.status

    };
    this.service.updateDelivery(data).subscribe(
      (data: Delivery) => {
        this.toastr.success('Successfully Updated');
        this.delivery = data;
        this.router.navigate(['flatDetails'])
      },
      (err: any) => {
        this.toastr.error('Failed to Update Delivery Details: Invalid Status');
        console.log(err)
      }
    )
  }

}
