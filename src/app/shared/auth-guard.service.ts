import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const role = route.data.role;
    if(this.authService.isUserLoggedIn())
    {
      const currentUser = sessionStorage.getItem('role');
      if(role && role.indexOf(currentUser) === -1)
      {
        this.router.navigate(['401']);
        return false;
      }
      return true;
    }
    
    // if (this.authService.isUserLoggedIn())
    //   return true;

    this.router.navigate(['login']);
    return false;

  }

}