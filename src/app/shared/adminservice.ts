import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Owner } from "../owner/owner";
import { Admin } from "../admin/admin";

@Injectable({
    providedIn:'root'
})
export class AdminService{
 
    private baseUrl:string='http://localhost:9999/api/v1';
    
    constructor(private http:HttpClient){}

    getAllAdmins():Observable<Admin[]>{
        return <Observable<Owner[]>>this.http.get(this.baseUrl+"/admin/owner/getOwnerList");
    }
 
    getAdminById(id:number):Observable<Admin>{
 
        return <Observable<Admin>>this.http.get(this.baseUrl+"/admin/owner/getOwnerById?id="+id)
    }
 
    deleteAdminById(id:number):Observable<Admin>{
 
        return <Observable<Admin>>this.http.delete(this.baseUrl+"/admin/owner/"+id)
    }
 
    updateAdmin(admin:Admin):Observable<Admin>{
 
        return <Observable<Admin>>this.http.put(this.baseUrl+"/admin/owner",admin)
    }
}