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

    /**
     * get All Guards
     * @returns Guard[]
     */
    getAllGuards(): Observable<Guard[]> {
        return <Observable<Guard[]>>this.http.get(this.baseUrl + "/admin/guard");
    }

    /**
     * get Guard By Id
     * @param id 
     * @returns Guard
     */
    getGuardById(id: number): Observable<Guard> {
        return <Observable<Guard>>this.http.get(this.baseUrl + "/admin/guard/getGuardById?id=" + id)
    }

    /**
     * delete Guard By Id
     * @param id 
     * @returns Guard
     */
    deleteGuardById(id: number): Observable<Guard> {
        return <Observable<Guard>>this.http.delete(this.baseUrl + "/admin/guard/" + id)
    }

    /**
     * update Guard
     * @param guard 
     * @returns Guard
     */
    updateGuard(guard: Guard): Observable<Guard> {

        return <Observable<Guard>>this.http.patch(this.baseUrl + "/admin/guard/updateGuard", guard)
    }

    /**
     * add Guard Shift
     * @param id 
     * @param guardShift 
     * @returns GuardShift
     */
    addGuardShift(id: number, guardShift: GuardShift) {
        return this.http.patch<GuardShift>(this.baseUrl + "/admin/guard/UpdateGuardShift?guardId=" + id, guardShift);
    }

    /**
     * get GuardShift By GuardId
     * @param id 
     * @returns GuardShift
     */
    getGuardShiftByGuardId(id: number): Observable<GuardShift> {
        return <Observable<GuardShift>>this.http.get(this.baseUrl + "/admin/guard/getGuardShiftsById?id=" + id);
    }

    /**
     * add Guard Salary
     * @param id 
     * @param guardSalary 
     * @returns GuardSalary
     */
    addGuardSalary(id: number, guardSalary: GuardSalary) {
        return this.http.patch<GuardSalary>(this.baseUrl + "/admin/guard/updateSalary?guardId=" + id, guardSalary);
    }

    /**
     * get GuardSalary By GuardId
     * @param id 
     * @returns GuardSalary[]
     */
    getGuardSalaryByGuardId(id: number): Observable<GuardSalary[]> {
        return <Observable<GuardSalary[]>>this.http.get(this.baseUrl + "/admin/guard/getGuardSalariesById?id=" + id);
    }
}