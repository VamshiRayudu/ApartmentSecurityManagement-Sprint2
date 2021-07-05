import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from './vehicle';
import { vehicleUpdate } from './vehicleUpdate';
import { VehicleService } from "../shared/Vehicleservice";

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  vehicles!: Vehicle[];
  vehicleUpdates!: vehicleUpdate[];
    private error!: string;
    private id: number = 0;
    public isOwner: boolean=false;
    public isAdmin: boolean=false;
    public isGuard: boolean=false;

    constructor(private route: ActivatedRoute,
      private router: Router, private service: VehicleService) {

    }



  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if(role=="ADMIN")
    {
      this.service.getAllVehicles().subscribe(
        (data: Vehicle[]) => this.vehicles = data,
        (err: any) => console.log(err)
    )
    this.isAdmin=true;
    }
    else if(role=="FLATOWNER")
    {
      this.service.getAllVehiclesByOwnerId(Number(sessionStorage.getItem('id'))).subscribe(
        (data: Vehicle[]) => this.vehicles = data,
        (err: any) => console.log(err)
    )
    this.isOwner=true;
    }
    else if(role=="GUARD")
    {
      this.service.getAllVehicles().subscribe(
        (data: Vehicle[]) => this.vehicles = data,
        (err: any) => console.log(err)
    )
    this.isGuard=true;
    }
  }

  
addVehicle() {
    this.router.navigate(['add-vehicle'])
}

updateVehicle(vehicle: Vehicle) {
  this.router.navigate(['add-vehicleUpdate',vehicle.id])
}

listVehicleUpdate(vehicle: Vehicle) {
  this.router.navigate(['list-vehicleupdate',vehicle.id])
}

onDelete(vehicle: Vehicle) {
    this.service.deleteVehicleById(vehicle.id).subscribe(
        (data: any) => {
            console.log('Vehicle deleted'),
            this.vehicles = this.vehicles.filter(
                vehi => vehi !== vehicle
            )
        }
    )
}
}
