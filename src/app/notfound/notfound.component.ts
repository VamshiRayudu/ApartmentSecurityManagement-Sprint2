import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  role:string= "";

  ngOnInit(): void {
     var r = sessionStorage.getItem('role')
     if(r != null)
     {
        this.role = r;
     }
  }

  onBack()
  {
    if(this.role == "ADMIN")
    {
      this.router.navigate(['admin-home'])
    }
    else if(this.role == "GUARD")
    {
      this.router.navigate(['guard-home'])
    }
    else if(this.role == "FLATOWNER")
    {
      this.router.navigate(['owner-home'])
    }
    else{
      this.router.navigate([''])
    }

  }

}