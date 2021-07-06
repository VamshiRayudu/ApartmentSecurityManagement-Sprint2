import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../shared/ownerservice';
import { Owner } from './owner';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.css']
})
export class ListOwnerComponent implements OnInit {

  owners!: Owner[];
  public isAdmin: boolean = false;

  constructor(private service: OwnerService, private router: Router) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role');
    if (role == "ADMIN") {
      this.isAdmin = true;
    }
    this.service.getAllOwners().subscribe(
      (data) => this.owners = data,
      (err) => console.log(err)
    );

  }

  onEdit(owner: Owner) {

    this.router.navigate(['edit-owner', owner.id])


  }
  onDelete(owner: Owner) {

    this.service.deleteOwnerById(owner.id).subscribe(
      (data) => {
        console.log('user deleted');
        this.owners = this.owners.filter(
          own => own !== owner
        )
      },
      (err) => console.log(err)

    );
  }

  addOwner() {
    this.router.navigate(['register']);
  }

  addFlatDetails(owner: Owner) {
    this.router.navigate(['add-flatDetails', owner.id]);
  }


}