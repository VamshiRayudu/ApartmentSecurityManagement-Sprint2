import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from "../shared/Vehicleservice";
import { Vehicle } from "./vehicle";


@Component({
    selector: 'vehicle',
    templateUrl: 'vehicle.component.html'
})

export class VehicleComponent implements OnInit {

    vehicle!: Vehicle;
    id: number = 0

    constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: VehicleService) {

    }

    ngOnInit(): void {
        this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
        this.service.getVehicleById(this.id).subscribe(
            (data) => {
                console.log(data);
                this.vehicle = data;
            },
            (err) => console.log(err)
        );
    }

    onBack(){
        this.router.navigate(['vehicles']);
    }

}