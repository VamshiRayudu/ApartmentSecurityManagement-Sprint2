import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Attendance } from "../domestichelp/attendance";
import { DomesticHelp } from "../domestichelp/domesticHelp";
import { FlatDetails } from "../flatdetails/flatdetails";

@Injectable({
    providedIn: 'root'
})

export class DomesticHelpService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    getDomesticHelpList(): Observable<DomesticHelp[]> {
        return <Observable<DomesticHelp[]>>this.http.get(this.baseUrl + "/admin/domesticHelps")
    }
    // guard/domesticHelps/getDomesticHelpById?id=21
    getDomesticHelpById(id: number): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.get(this.baseUrl + "/guard/domesticHelps/getDomesticHelpById?id=" + id)
    }
    // guard/domesticHelp/Attendance?domesticHelpId=21
    updateAttendance(id: number, attendance: Attendance): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.patch(this.baseUrl + "/guard/domesticHelp/Attendance?domesticHelpId=" + id, attendance)
    }
    // guard/domesticHelps?flatNumber=21
    addDomesticHelp(flatNumber: number,domesticHelp: DomesticHelp): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.post(this.baseUrl + "/guard/domesticHelps/" + flatNumber, domesticHelp)
    }
    
    getDomesticHelpByFlatId(flatNumber: number): Observable<DomesticHelp[]> {
        return <Observable<DomesticHelp[]>>this.http.get(this.baseUrl + "/owner/domesticHelps/getDomesticHelpByFlatId/" + flatNumber)
    }
    // admin/domesticHelps/getDomesticHelpAttendanceById?id=21
    getDomesticHelpAttendanceById(id: number): Observable<Attendance[]> {
        return <Observable<Attendance[]>>this.http.get(this.baseUrl + "/admin/domesticHelps/getDomesticHelpAttendanceById?id=" + id)
    }
    // guard/domesticHelps/21?newHelpType=COOKING&oldHelpType=COOKING
    updateDomesticHelpById(id: number,domesticHelp: DomesticHelp): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.patch(this.baseUrl + "/guard/domesticHelps/"+id, domesticHelp)
    }
 
}