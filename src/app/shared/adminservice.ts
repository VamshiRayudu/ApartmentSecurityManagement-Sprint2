import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Owner } from "../owner/owner";
import { Admin } from "../admin/admin";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private baseUrl: string = 'http://localhost:9999/api/v1';

    constructor(private http: HttpClient) { }

    /**
     * Get All Admins
     * @returns Admin[]
     */
    getAllAdmins(): Observable<Admin[]> {
        return <Observable<Admin[]>>this.http.get(this.baseUrl + "/admin/getAllAdmins");
    }

    /**
     * Get Admin By Id
     * @param id 
     * @returns Admin
     */
    getAdminById(id: number): Observable<Admin> {
        return <Observable<Admin>>this.http.get(this.baseUrl + "/admin/getAdminById?id=" + id)
    }

    /**
     * Delete Admin By Id
     * @param id 
     * @returns Admin
     */
    deleteAdminById(id: number): Observable<Admin> {
        return <Observable<Admin>>this.http.delete(this.baseUrl + "/admin/" + id)
    }

    /**
     * Update Admin
     * @param admin 
     * @returns Admin
     */
    updateAdmin(admin: Admin): Observable<Admin> {
        return <Observable<Admin>>this.http.patch(this.baseUrl + "/admin/", admin)
    }
}