import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OwnerService } from '../shared/ownerservice';
import { Owner } from './owner';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.css']
})
export class ListOwnerComponent implements OnInit {

  owners!: Owner[];
  public isAdmin: boolean=false;

  constructor(private service: OwnerService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    var role=sessionStorage.getItem('role');
    if(role == "ADMIN")
    {
      this.isAdmin = true;
    }
    this.service.getAllOwners().subscribe(
      (data) => {
        // this.toastr.success('Successfully Fetched');
        this.owners = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch Owner Details: Invalid Status');
        console.log(err)
      }
    );

  }

  onEdit(owner: Owner) {

    this.router.navigate(['edit-owner', owner.id])


  }
  onDelete(owner: Owner) {

    this.service.deleteOwnerById(owner.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Deleted');
        console.log('user deleted');
        this.owners = this.owners.filter(
          own => own !== owner
        )
        this.router.navigate(['admin-home']);
      },
      (err) => {
        // this.toastr.error('Failed to Delete');
        console.log(err)
      }

    );
  }

  addOwner() {
    this.router.navigate(['register']);
  }

  addFlatDetails(owner: Owner) {
    this.router.navigate(['add-flatDetails',owner.id]);
  }


}
