import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vehicle } from "../vehicle/vehicle";
import { vehicleUpdate } from "../vehicle/vehicleUpdate";


@Injectable({
    providedIn: 'root'
})

export class VehicleService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    getAllVehicles(): Observable<Vehicle[]> {
        return <Observable<Vehicle[]>>this.http.get(this.baseUrl + "/admin/vehicles/getAllVehicles")
    }

    getVehicleById(id: number): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.get(this.baseUrl + "/owner/vehicles/getVehicleById?id=" + id)
    }

    deleteVehicleById(id: number): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.delete(this.baseUrl + "/owner/vehicles/" + id)
    }

    updateVehicleUpdate(id: number, vehicleUpdate: vehicleUpdate): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.post(this.baseUrl + "/guard/vehicleUpdates?vehicleId=" + id, vehicleUpdate)
    }

    addVehicle(vehicle: Vehicle): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.post(this.baseUrl + "/owner/vehicles", vehicle)
    }
    
    getAllVehiclesByOwnerId(ownerId: number): Observable<Vehicle[]> {
        return <Observable<Vehicle[]>>this.http.get(this.baseUrl + "/owner/getVehiclesByOwnerId?id=" + ownerId)
    }

    findVehicleUpdatesById(id: number): Observable<vehicleUpdate[]> {
        return <Observable<vehicleUpdate[]>>this.http.get(this.baseUrl + "/guard/vehicleUpdates/getById?id=" + id)
    }
 
}