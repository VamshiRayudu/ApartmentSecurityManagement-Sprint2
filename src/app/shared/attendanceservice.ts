import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Attendance } from "../domestichelp/attendance";

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    /**
     * add Guard Attendance
     * @param id 
     * @param attendance 
     * @returns Attendance
     */
    addGuardAttendance(id: number, attendance: Attendance) {
        return this.http.patch<Attendance>(this.baseUrl + "/guard/updateGuardAttendance?id=" + id, attendance);
    }

    /**
     * get Attendance By GuardId
     * @param id 
     * @returns Attendance[]
     */
    getAttendanceByGuardId(id: number): Observable<Attendance[]> {
        return <Observable<Attendance[]>>this.http.get(this.baseUrl + "/guard/getGuardAttendanceById?id=" + id);
    }

    /**
     * add Dhelp Attendance
     * @param id 
     * @param attendance 
     * @returns Attendance
     */
    addDhelpAttendance(id: number, attendance: Attendance) {
        return this.http.patch<Attendance>(this.baseUrl + "/guard/domesticHelp/Attendance?domesticHelpId=" + id, attendance);
    }

    /**
     * get Attendance By DhelpId
     * @param id 
     * @returns Attendance[]
     */
    getAttendanceByDhelpId(id: number): Observable<Attendance[]> {
        return <Observable<Attendance[]>>this.http.get(this.baseUrl + "/admin/domesticHelps/getDomesticHelpAttendanceById?id=" + id);
    }
}