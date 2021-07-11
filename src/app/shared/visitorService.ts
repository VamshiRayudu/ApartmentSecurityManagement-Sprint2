import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Visitor } from "../visitor/visitor";

@Injectable({
    providedIn: 'root'
})

export class VisitorService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    /**
     * get Visitor By FlatId
     * @param flatNumber 
     * @returns Visitor[]
     */
    getVisitorByFlatId(flatNumber: number): Observable<Visitor[]> {
        return <Observable<Visitor[]>>this.http.get(this.baseUrl + "/guard/visitor/getVisitorListByFlatNumber?id=" + flatNumber)
    }

    /**
     * add Visitor
     * @param visitor 
     * @param guardId 
     * @returns Visitor
     */
    addVisitor(visitor: Visitor, guardId: number): Observable<Visitor> {
        return <Observable<Visitor>>this.http.post(this.baseUrl + "/guard/visitor?guardId=" + guardId, visitor)
    }

    /**
     * get Visitor ById
     * @param id 
     * @returns Visitor
     */
    getVisitorById(id: number): Observable<Visitor> {
        return <Observable<Visitor>>this.http.get(this.baseUrl + "/owner/visitor/" + id)
    }

    /**
     * update Visitor
     * @param visitor 
     * @param guardId 
     * @returns Visitor
     */
    updateVisitor(visitor: Visitor, guardId: number): Observable<Visitor> {
        return <Observable<Visitor>>this.http.patch(this.baseUrl + "/guard/visitor/updateOutTime?guardId=" + guardId, visitor)
    }
}