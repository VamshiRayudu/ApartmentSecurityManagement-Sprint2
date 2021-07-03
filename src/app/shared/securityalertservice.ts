import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { SecurityAlert } from "../securityalert/securityalert";

@Injectable({
    providedIn:'root'
})
export class SecurityAlertService{
 
    private baseUrl:string='http://localhost:9999/api/v1';
    
    constructor(private http:HttpClient){}
 
    getAllSecurityAlerts():Observable<SecurityAlert[]>{
        return <Observable<SecurityAlert[]>>this.http.get(this.baseUrl+"/admin/securityAlert");
    }
 
    getSecurityAlertById(id:number):Observable<SecurityAlert>{
 
        return <Observable<SecurityAlert>>this.http.get(this.baseUrl+"/admin/securityAlert/getSecurityAlertById?id="+id)
    }

    updateSecurityAlert(id:number,securityAlert:SecurityAlert):Observable<SecurityAlert>{
 
        return <Observable<SecurityAlert>>this.http.patch(this.baseUrl+"/admin/securityAlert/"+id,securityAlert)
    }
  
    addSecurityAlert(securityAlert:any):Observable<SecurityAlert>{
 
        return <Observable<SecurityAlert>>this.http.post(this.baseUrl+"/admin/addSecurityAlert",securityAlert);
    }
}