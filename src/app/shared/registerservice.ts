import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../register/user';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(
        private httpClient: HttpClient
    ) { }

    public createUser(user: any) {

        return this.httpClient.post<User>("http://localhost:9999/register", user);
    }
}