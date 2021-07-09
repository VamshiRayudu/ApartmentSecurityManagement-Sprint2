import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../owner/owner';
import { OwnerService } from '../shared/ownerservice';

@Component({
  selector: 'app-owner-homepage',
  templateUrl: './owner-homepage.component.html',
  styleUrls: ['./owner-homepage.component.css']
})
export class OwnerHomepageComponent implements OnInit {

  owner!: Owner;
  id: number = 0;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router,
    private service: OwnerService) { }


  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('id'));

    this.service.getOwnerById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.owner = data
      },
      (err) => console.log(err)
    );

  }

  onEdit(owner: Owner) {
    this.router.navigate(['edit-owner', owner.id])
  }

  updatePassword() {
    this.router.navigate(['updatePassword'])
  }

}
