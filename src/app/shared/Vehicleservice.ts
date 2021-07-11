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

    /**
     * get All Vehicles
     * @returns Vehicle[]
     */
    getAllVehicles(): Observable<Vehicle[]> {
        return <Observable<Vehicle[]>>this.http.get(this.baseUrl + "/admin/vehicles/getAllVehicles")
    }

    /**
     * get Vehicle ById
     * @param id 
     * @returns Vehicle
     */
    getVehicleById(id: number): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.get(this.baseUrl + "/owner/vehicles/getVehicleById?id=" + id)
    }

    /**
     * delete Vehicle ById
     * @param id 
     * @returns Vehicle
     */
    deleteVehicleById(id: number): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.delete(this.baseUrl + "/owner/vehicles/" + id)
    }

    /**
     * update Vehicle Update
     * @param id 
     * @param vehicleUpdate 
     * @returns Vehicle
     */
    updateVehicleUpdate(id: number, vehicleUpdate: vehicleUpdate): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.post(this.baseUrl + "/guard/vehicleUpdates?vehicleId=" + id, vehicleUpdate)
    }

    /**
     * add Vehicle
     * @param vehicle 
     * @returns Vehicle
     */
    addVehicle(vehicle: Vehicle): Observable<Vehicle> {
        return <Observable<Vehicle>>this.http.post(this.baseUrl + "/owner/vehicles", vehicle)
    }

    /**
     * get All Vehicles By OwnerId
     * @param ownerId 
     * @returns Vehicle[]
     */
    getAllVehiclesByOwnerId(ownerId: number): Observable<Vehicle[]> {
        return <Observable<Vehicle[]>>this.http.get(this.baseUrl + "/owner/getVehiclesByOwnerId?id=" + ownerId)
    }

    /**
     * find Vehicle Updates By Id
     * @param id 
     * @returns vehicleUpdate[]
     */
    findVehicleUpdatesById(id: number): Observable<vehicleUpdate[]> {
        return <Observable<vehicleUpdate[]>>this.http.get(this.baseUrl + "/guard/vehicleUpdates/getById?id=" + id)
    }
}