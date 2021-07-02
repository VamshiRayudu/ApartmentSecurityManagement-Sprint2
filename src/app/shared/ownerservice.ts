import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Owner } from "../owner/owner";

@Injectable({
    providedIn:'root'
})
export class OwnerService{
 
    private baseUrl:string='http://localhost:9999/api/v1';
    
    constructor(private http:HttpClient){}

    getAllOwners():Observable<Owner[]>{
        return <Observable<Owner[]>>this.http.get(this.baseUrl+"/admin/owner/getOwnerList");
    }
 
    getOwnerById(id:number):Observable<Owner>{
 
        return <Observable<Owner>>this.http.get(this.baseUrl+"/admin/owner/getOwnerById?id="+id)
    }
 
    deleteOwnerById(id:number):Observable<Owner>{
 
        return <Observable<Owner>>this.http.delete(this.baseUrl+"/admin/owner/"+id)
    }
 
    updateOwner(owner:Owner):Observable<Owner>{
 
        return <Observable<Owner>>this.http.put(this.baseUrl+"/admin/owner",owner)
    }
}