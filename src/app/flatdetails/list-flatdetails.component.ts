import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatDetailsService } from '../shared/flatDetailsService';
import { FlatDetails } from './flatdetails';

@Component({
  selector: 'app-list-flatdetails',
  templateUrl: './list-flatdetails.component.html',
  styleUrls: ['./list-flatdetails.component.css']
})
export class ListFlatdetailsComponent implements OnInit {

  flatDetails!: FlatDetails[];
    private error!: string;
    private flatNumber: number = 0;
    public isOwner: boolean=false;
    public isAdmin: boolean=false;
    public isGuard: boolean=false;

  constructor(private route: ActivatedRoute,
    private router: Router, private service: FlatDetailsService) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if(role=="ADMIN")
    {
      this.service.getFlatDetails().subscribe(
        (data: FlatDetails[]) => this.flatDetails = data,
        (err: any) => console.log(err)
    )
    this.isAdmin=true;
    }
    else if(role=="FLATOWNER")
    {
      this.service.getFlatDetailsByOwnerId(Number(sessionStorage.getItem('id'))).subscribe(
        (data: FlatDetails[]) => this.flatDetails = data,
        (err: any) => console.log(err)
    )
    this.isOwner=true;
    }
    else if(role=="GUARD")
    {
      this.service.getFlatDetails().subscribe(
        (data: FlatDetails[]) => this.flatDetails = data,
        (err: any) => console.log(err)
    )
    this.isGuard=true;
    }
  }

  addFlatDetails() {
    this.router.navigate(['add-flatdetails'])
}

addDHelp(flatDetails: FlatDetails) {
  this.router.navigate(['add-domestichelp',flatDetails.flatNumber])
}

addDelivery(flatDetails: FlatDetails) {
  this.router.navigate(['add-delivery',flatDetails.flatNumber])
}

addVisitor(flatDetails: FlatDetails) {
  this.router.navigate(['add-visitor',flatDetails.flatNumber])
}

viewDelivery(flatDetails: FlatDetails) {
  this.router.navigate(['list-delivery',flatDetails.flatNumber])
}

viewVisitor(flatDetails: FlatDetails) {
  this.router.navigate(['list-visitor',flatDetails.flatNumber])
}

viewDHelp(flatDetails: FlatDetails) {
  this.router.navigate(['list-domestichelp',flatDetails.flatNumber])
}

onEdit(flatDetails: FlatDetails) {
  this.router.navigate(['edit-flatdetails', flatDetails.flatNumber])
}

}
