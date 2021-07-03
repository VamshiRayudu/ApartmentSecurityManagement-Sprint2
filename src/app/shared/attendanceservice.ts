import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Owner } from "../owner/owner";
import { Admin } from "../admin/admin";
import { Attendance } from "../domestichelp/attendance";

@Injectable({
    providedIn:'root'
})
export class AttendanceService{
 
    private baseUrl:string='http://localhost:9999/api/v1';
    
    constructor(private http:HttpClient){}

    addGuardAttendance(id:number,attendance:Attendance) {
        return this.http.post<Attendance>(this.baseUrl+"/guard/Attendance?dhelpId="+id,attendance);
    }

    getAttendanceByGuardId(id:number):Observable<Attendance[]>{
        return <Observable<Attendance[]>>this.http.get(this.baseUrl+"/admin/getAdminList");
    }

    addDhelpAttendance(id:number,attendance:Attendance) {
        return this.http.post<Attendance>(this.baseUrl+"/guard/AddDomesticHelpAttendance?dhelpId="+id,attendance);
    } 

    getAttendanceByDhelpId(id:number):Observable<Attendance[]>{
        return <Observable<Attendance[]>>this.http.get(this.baseUrl+"/admin/DhelpAttendance");
    }
}