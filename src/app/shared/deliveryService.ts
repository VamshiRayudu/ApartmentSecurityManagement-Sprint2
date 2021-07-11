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

    /**
     * getDeliveryByFlatId
     * @param flatNumber 
     * @returns Delivery
     */
    getDeliveryByFlatId(flatNumber: number): Observable<Delivery[]> {
        return <Observable<Delivery[]>>this.http.get(this.baseUrl + "/owner/getDeliveryByFlatId/" + flatNumber)
    }
    
    /**
     * add Delivery
     * @param flatNumber 
     * @param guardId 
     * @param delivery 
     * @returns Delivery
     */
    addDelivery(flatNumber: number, guardId: number, delivery: Delivery): Observable<Delivery> {
        return <Observable<Delivery>>this.http.post(this.baseUrl + "/guard/delivery/addDelivery?flatId=" + flatNumber + "&guardId=" + guardId, delivery)
    }

    /**
     * get Delivery By Id
     * @param id 
     * @returns Delivery
     */
    getDeliveryById(id: number): Observable<Delivery> {
        return <Observable<Delivery>>this.http.get(this.baseUrl + "/owner/delivery/" + id)
    }

    /**
     * update Delivery
     * @param delivery 
     * @returns Delivery
     */
    updateDelivery(delivery: Delivery): Observable<Delivery> {
        return <Observable<Delivery>>this.http.patch(this.baseUrl + "/guard/delivery/updateDeliveryStatus", delivery)
    }

}