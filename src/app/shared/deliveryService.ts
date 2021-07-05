import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Delivery } from "../delivery/delivery";

@Injectable({
    providedIn: 'root'
})

export class DeliveryService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    getDeliveryByFlatId(flatNumber: number): Observable<Delivery[]> {
        return <Observable<Delivery[]>>this.http.get(this.baseUrl + "/owner/getDeliveryByFlatId/" + flatNumber)
    }
    // guard/delivery/addDelivery?flatId=7&guardId=6
    addDelivery(flatNumber: number,guardId: number,delivery: Delivery): Observable<Delivery> {
        return <Observable<Delivery>>this.http.post(this.baseUrl + "/guard/delivery/addDelivery?flatId="+flatNumber+"&guardId="+guardId, delivery)
    }

    getDeliveryById(id: number): Observable<Delivery> {
        return <Observable<Delivery>>this.http.get(this.baseUrl + "/owner/delivery/" + id)
    }

    updateDelivery(delivery: Delivery): Observable<Delivery> {
        return <Observable<Delivery>>this.http.patch(this.baseUrl + "/guard/delivery/updateDeliveryStatus" , delivery)
    }

    // deleteVehicleById(id: number): Observable<Vehicle> {
    //     return <Observable<Vehicle>>this.http.delete(this.baseUrl + "/owner/vehicles/" + id)
    // }

    // getAllVehiclesByOwnerId(ownerId: number): Observable<Vehicle[]> {
    //     return <Observable<Vehicle[]>>this.http.get(this.baseUrl + "/owner/getVehiclesByOwnerId?id=" + ownerId)
    // }

    // findVehicleUpdatesById(id: number): Observable<vehicleUpdate[]> {
    //     return <Observable<vehicleUpdate[]>>this.http.get(this.baseUrl + "/guard/vehicleUpdates/getById?id=" + id)
    // }
 
}