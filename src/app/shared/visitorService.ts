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

    getVisitorByFlatId(flatNumber: number): Observable<Visitor[]> {
        return <Observable<Visitor[]>>this.http.get(this.baseUrl + "/guard/visitor/getVisitorListByFlatNumber?id=" + flatNumber)
    }

    addVisitor(visitor: Visitor,guardId: number): Observable<Visitor> {
        return <Observable<Visitor>>this.http.post(this.baseUrl + "/guard/visitor?guardId=" + guardId , visitor)
    }

    getVisitorById(id: number): Observable<Visitor> {
        return <Observable<Visitor>>this.http.get(this.baseUrl + "/owner/visitor/" + id)
    }

    updateVisitor(visitor: Visitor,guardId: number): Observable<Visitor> {
        return <Observable<Visitor>>this.http.patch(this.baseUrl + "/guard/visitor/updateOutTime?guardId=" + guardId , visitor)
    }
}