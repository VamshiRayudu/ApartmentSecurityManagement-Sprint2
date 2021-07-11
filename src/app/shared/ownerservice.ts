import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Owner } from "../owner/owner";

@Injectable({
    providedIn: 'root'
})
export class OwnerService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    /**
     * get All Owners
     * @returns Owner[]
     */
    getAllOwners(): Observable<Owner[]> {
        return <Observable<Owner[]>>this.http.get(this.baseUrl + "/admin/owner/getOwnerList");
    }

    /**
     * get Owner ById
     * @param id 
     * @returns Owner
     */
    getOwnerById(id: number): Observable<Owner> {

        return <Observable<Owner>>this.http.get(this.baseUrl + "/admin/owner/getOwnerById?id=" + id)
    }

    /**
     * delete Owner By Id
     * @param id 
     * @returns Owner
     */
    deleteOwnerById(id: number): Observable<Owner> {

        return <Observable<Owner>>this.http.delete(this.baseUrl + "/admin/owner/" + id)
    }

    /**
     * update Owner
     * @param owner 
     * @returns Owner
     */
    updateOwner(owner: Owner): Observable<Owner> {

        return <Observable<Owner>>this.http.patch(this.baseUrl + "/admin/owner", owner)
    }
}