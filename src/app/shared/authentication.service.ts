import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtResponse } from '../login/login.component';

export class User {

  email: string = '';
  password: string = '';
  role: string = '';
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user!: User;
  private baseUrl = 'http://localhost:9999'

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * Authenticate
   * @param email 
   * @param password 
   * @param role 
   * @returns userData
   */
  authenticate(email: any, password: any, role: any): Observable<any> {

    console.log('in authentication service authenticate method', email)
    return this.httpClient.post<any>(`${this.baseUrl}/authenticate`, { email, password, role })
      .pipe(map(
        userData => {
          sessionStorage.setItem('email', email);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          sessionStorage.setItem('id', userData.id);
          sessionStorage.setItem('role', role);
          return userData;
        }
      ));
  }

  /**
   * 
   * @returns bool
   */
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  /**
   * Logout Function
   */
  logOut() {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('role')
  }

  /**
   * Update Password
   * @param newPassword 
   * @param user 
   * @returns User
   */
  updatePassword(newPassword: string, user: User): Observable<User> {
    return <Observable<User>>this.httpClient.patch(this.baseUrl + "/updatePassword?newPassword=" + newPassword, user)
  }
}