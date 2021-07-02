import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vehicleUpdate } from './vehicleUpdate';
import { VehicleService } from "../shared/Vehicleservice";

@Component({
  selector: 'app-list-vehicleupdate',
  templateUrl: './list-vehicleupdate.component.html',
//   styleUrls: ['./list-vehicleupdate.component.css']
})
export class ListVehicleUpdateComponent implements OnInit {


  vehicleUpdates!: vehicleUpdate[];
    private error!: string;
    private id: number = 0;
    private numberPlate: string = "";
    

    constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: VehicleService) {

    }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
        this.service.findVehicleUpdatesById(this.id).subscribe(
            (data) => {
                console.log(data);
                this.vehicleUpdates = data;
            },
            (err) => console.log(err)
        );
  }

  onBack(){
    this.router.navigate(['vehicles']);
}
}