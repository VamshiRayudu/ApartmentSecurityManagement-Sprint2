import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { VehicleService } from "../shared/Vehicleservice";
import { Vehicle } from "./vehicle";


@Component({
    selector: 'vehicle',
    templateUrl: 'vehicle.component.html',
    styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent implements OnInit {

    vehicle!: Vehicle;
    id: number = 0

    constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: VehicleService, private toastr: ToastrService) {

    }

    ngOnInit(): void {
        this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
        this.service.getVehicleById(this.id).subscribe(
            (data) => {
                this.toastr.success('Successfully Fetched');
                console.log(data);
                this.vehicle = data;
            },
            (err) => {
                this.toastr.error('Failed to Fetch Data');
                console.log(err)
            }
        );
    }

    /**
     * On Back Button
     */
    onBack() {
        this.router.navigate(['vehicles']);
    }

}