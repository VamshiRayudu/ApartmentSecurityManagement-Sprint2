import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Attendance } from "../domestichelp/attendance";

@Injectable({
    providedIn:'root'
})
export class AttendanceService{
 
    private baseUrl:string='http://localhost:9999/api/v1';
    
    constructor(private http:HttpClient){}

    addGuardAttendance(id:number,attendance:Attendance) {
        return this.http.put<Attendance>(this.baseUrl+"/guard/Attendance"+id,attendance);
    }

    getAttendanceByGuardId(id:number):Observable<Attendance[]>{
        return <Observable<Attendance[]>>this.http.get(this.baseUrl+"/guard/getGuardAttendanceById?id="+id);
    }

    addDhelpAttendance(id:number,attendance:Attendance) {
        return this.http.patch<Attendance>(this.baseUrl+"/guard/domesticHelp/Attendance?domesticHelpId="+id,attendance);
    } 

    getAttendanceByDhelpId(id:number):Observable<Attendance[]>{
        return <Observable<Attendance[]>>this.http.get(this.baseUrl+"/admin/domesticHelps/getDomesticHelpAttendanceById?id="+id);
    }
}