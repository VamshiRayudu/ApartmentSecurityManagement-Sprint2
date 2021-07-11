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

    /**
     * get DomesticHelp List
     * @returns DomesticHelp[]
     */
    getDomesticHelpList(): Observable<DomesticHelp[]> {
        return <Observable<DomesticHelp[]>>this.http.get(this.baseUrl + "/admin/domesticHelps")
    }
    
    /**
     * get DomesticHelp By Id
     * @param id 
     * @returns DomesticHelp
     */
    getDomesticHelpById(id: number): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.get(this.baseUrl + "/guard/domesticHelps/getDomesticHelpById?id=" + id)
    }
    
    /**
     * update Dhelp Attendance
     * @param id 
     * @param attendance 
     * @returns DomesticHelp
     */
    updateAttendance(id: number, attendance: Attendance): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.patch(this.baseUrl + "/guard/domesticHelp/Attendance?domesticHelpId=" + id, attendance)
    }
    
    /**
     * add Domestic Help
     * @param flatNumber 
     * @param domesticHelp 
     * @returns DomesticHelp
     */
    addDomesticHelp(flatNumber: number, domesticHelp: DomesticHelp): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.post(this.baseUrl + "/guard/domesticHelps/" + flatNumber, domesticHelp)
    }

    /**
     * get DomesticHelp By FlatId
     * @param flatNumber 
     * @returns DomesticHelp[]
     */
    getDomesticHelpByFlatId(flatNumber: number): Observable<DomesticHelp[]> {
        return <Observable<DomesticHelp[]>>this.http.get(this.baseUrl + "/owner/domesticHelps/getDomesticHelpByFlatId/" + flatNumber)
    }
    
    /**
     * get DomesticHelp Attendance By Id
     * @param id 
     * @returns Attendance[]
     */
    getDomesticHelpAttendanceById(id: number): Observable<Attendance[]> {
        return <Observable<Attendance[]>>this.http.get(this.baseUrl + "/admin/domesticHelps/getDomesticHelpAttendanceById?id=" + id)
    }
    
    /**
     * update DomesticHelp By Id
     * @param id 
     * @param domesticHelp 
     * @returns DomesticHelp
     */
    updateDomesticHelpById(id: number, domesticHelp: DomesticHelp): Observable<DomesticHelp> {
        return <Observable<DomesticHelp>>this.http.patch(this.baseUrl + "/guard/domesticHelps/" + id, domesticHelp)
    }

}