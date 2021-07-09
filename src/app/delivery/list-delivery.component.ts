import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryService } from '../shared/deliveryService';
import { Delivery } from './delivery';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.css']
})
export class ListDeliveryComponent implements OnInit {

  deliveries!: Delivery[];
  private error!: string;
  private id: number = 0;
  private flatNumber: number = 0;
  public isGuard: boolean = false;


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: DeliveryService,private toastr: ToastrService) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if (role == "GUARD") {
      this.isGuard = true;
    }
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getDeliveryByFlatId(this.id).subscribe(
      (data: Delivery[]) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.deliveries = data;
      },
      (err: any) => {
        this.toastr.error('Failed to Fetch Delivery Details: Invalid Status');
        console.log(err)
      }
    );
  }

  onEdit(delivery: Delivery) {
    this.router.navigate(['edit-delivery', delivery.deliveryId]);
  }

  onBack() {
    this.router.navigate(['flatDetails']);
  }

}
