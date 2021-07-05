import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Guard } from "../guard/guard";
import { GuardShift } from "../guard/guardshift";
import { GuardSalary } from "../guard/guardsalary";

@Injectable({
    providedIn: 'root'
})
export class GuardService {

    private baseUrl: string = 'http://localhost:9999/api/v1';
    constructor(private http: HttpClient) { }

    getAllGuards(): Observable<Guard[]> {
        return <Observable<Guard[]>>this.http.get(this.baseUrl + "/admin/guard");
    }

    getGuardById(id:number): Observable<Guard> {
        return <Observable<Guard>>this.http.get(this.baseUrl + "/admin/guard/getGuardById?id=" + id)
    }

    deleteGuardById(id: number): Observable<Guard> {
        return <Observable<Guard>>this.http.delete(this.baseUrl + "/admin/guard/" + id)
    }

    updateGuard(guard: Guard): Observable<Guard> {

        return <Observable<Guard>>this.http.patch(this.baseUrl + "/admin/guard/updateGuard", guard)
    }

    addGuardShift(id:number,guardShift:GuardShift) {
        return this.http.patch<GuardShift>(this.baseUrl+"/admin/guard/UpdateGuardShift?guardId="+id,guardShift);
    }

    getGuardShiftByGuardId(id:number):Observable<GuardShift>{
        return <Observable<GuardShift>>this.http.get(this.baseUrl+"/admin/guard/getGuardShiftsById?id="+id);
    }

    addGuardSalary(id:number,guardSalary:GuardSalary) {
        return this.http.patch<GuardSalary>(this.baseUrl+"/admin/guard/updateSalary?guardId="+id,guardSalary);
    }

    getGuardSalaryByGuardId(id:number):Observable<GuardSalary[]>{
        return <Observable<GuardSalary[]>>this.http.get(this.baseUrl+"/admin/guard/getGuardSalariesById?id="+id);
    }
}