import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { FlatDetails } from "../flatdetails/flatdetails";
import { Owner } from "../owner/owner";

@Injectable({
    providedIn: 'root'
})

export class FlatDetailsService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    addFlatDetails(flatDetails: FlatDetails): Observable<FlatDetails> {
        return <Observable<FlatDetails>>this.http.post(this.baseUrl + "/admin/flatDetails", flatDetails)
    }

    getFlatDetails(): Observable<FlatDetails[]> {
        return <Observable<FlatDetails[]>>this.http.get(this.baseUrl + "/owner/flatDetails")
    }
    // admin/flatDetails/getFlatDetailsById?flatNumber=7
    getFlatDetailsById(flatNumber: number): Observable<FlatDetails> {
        return <Observable<FlatDetails>>this.http.get(this.baseUrl + "/admin/flatDetails/getFlatDetailsById?flatNumber=" + flatNumber)
    }
    // owner/getFlatDetailsByOwnerId?id=3
    getFlatDetailsByOwnerId(ownerId: number): Observable<FlatDetails[]> {
        return <Observable<FlatDetails[]>>this.http.get(this.baseUrl + "/owner/getFlatDetailsByOwnerId?id=" + ownerId)
    }

    updateFlatDetails(flatNumber: number,owner: Owner): Observable<FlatDetails> {
        return <Observable<FlatDetails>>this.http.patch(this.baseUrl + "/admin/flatDetails/"+flatNumber, owner)
    }
}