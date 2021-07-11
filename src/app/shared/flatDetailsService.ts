import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { FlatDetails } from "../flatdetails/flatdetails";
import { FlatRent } from "../flatdetails/flatRent";
import { Owner } from "../owner/owner";

@Injectable({
    providedIn: 'root'
})

export class FlatDetailsService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    /**
     * add Flat Details
     * @param flatDetails 
     * @returns FlatDetails
     */
    addFlatDetails(flatDetails: FlatDetails): Observable<FlatDetails> {
        return <Observable<FlatDetails>>this.http.post(this.baseUrl + "/admin/flatDetails", flatDetails)
    }

    /**
     * get Flat Details
     * @returns FlatDetails[]
     */
    getFlatDetails(): Observable<FlatDetails[]> {
        return <Observable<FlatDetails[]>>this.http.get(this.baseUrl + "/owner/flatDetails")
    }
    
    /**
     * get FlatDetails ById
     * @param flatNumber 
     * @returns FlatDetails[]
     */
    getFlatDetailsById(flatNumber: number): Observable<FlatDetails> {
        return <Observable<FlatDetails>>this.http.get(this.baseUrl + "/admin/flatDetails/getFlatDetailsById?flatNumber=" + flatNumber)
    }
    
    /**
     * get FlatDetails By OwnerId
     * @param ownerId 
     * @returns FlatDetails[]
     */
    getFlatDetailsByOwnerId(ownerId: number): Observable<FlatDetails[]> {
        return <Observable<FlatDetails[]>>this.http.get(this.baseUrl + "/owner/getFlatDetailsByOwnerId?id=" + ownerId)
    }

    /**
     * update FlatDetails
     * @param flatNumber 
     * @param flatRent 
     * @returns FlatDetails[]
     */
    updateFlatDetails(flatNumber: number, flatRent: FlatRent): Observable<FlatDetails> {
        return <Observable<FlatDetails>>this.http.patch(this.baseUrl + "/admin/flatDetails/" + flatNumber, flatRent)
    }
}