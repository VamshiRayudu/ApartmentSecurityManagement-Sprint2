import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  public isOwner: boolean = false;
  public isAdmin: boolean = false;
  public isGuard: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router, private service: FlatDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if (role == "ADMIN") {
      this.service.getFlatDetails().subscribe(
        (data: FlatDetails[]) => {
          // this.toastr.success('Successfully Fetched');
          this.flatDetails = data;
        },
        (err: any) => {
          this.toastr.error('Failed to Fetch Flat Details: Invalid Status');
          console.log(err)
        }
      )
      this.isAdmin = true;
    }
    else if (role == "FLATOWNER") {
      this.service.getFlatDetailsByOwnerId(Number(sessionStorage.getItem('id'))).subscribe(
        (data: FlatDetails[]) => {
          // this.toastr.success('Successfully Fetched');
          this.flatDetails = data;
        },
        (err: any) => {
          this.toastr.error('Failed to Fetch Flat Details: Invalid Status');
          console.log(err)
        }
      )
      this.isOwner = true;
    }
    else if (role == "GUARD") {
      this.service.getFlatDetails().subscribe(
        (data: FlatDetails[]) => {
          // this.toastr.success('Successfully Fetched');
          this.flatDetails = data;
        },
        (err: any) => {
          this.toastr.error('Failed to Fetch Flat Details: Invalid Status');
          console.log(err)
        }
      )
      this.isGuard = true;
    }
  }

  /**
   * Add FlatDetails Button
   */
  addFlatDetails() {
    this.router.navigate(['add-flatdetails'])
  }

  /**
   * Add Dhelp
   * @param flatDetails
   */
  addDHelp(flatDetails: FlatDetails) {
    this.router.navigate(['add-domestichelp', flatDetails.flatNumber])
  }

  /**
   * Add Delivery
   * @param flatDetails
   */
  addDelivery(flatDetails: FlatDetails) {
    this.router.navigate(['add-delivery', flatDetails.flatNumber])
  }

  /**
   * Add Visitor
   * @param flatDetails
   */
  addVisitor(flatDetails: FlatDetails) {
    this.router.navigate(['add-visitor', flatDetails.flatNumber])
  }

  /**
   * View Delivery
   * @param flatDetails
   */
  viewDelivery(flatDetails: FlatDetails) {
    this.router.navigate(['list-delivery', flatDetails.flatNumber])
  }

  /**
   * View Visitor
   * @param flatDetails
   */
  viewVisitor(flatDetails: FlatDetails) {
    this.router.navigate(['list-visitor', flatDetails.flatNumber])
  }

  /**
   * View Dhelp
   * @param flatDetails
   */
  viewDHelp(flatDetails: FlatDetails) {
    this.router.navigate(['list-domestichelp', flatDetails.flatNumber])
  }

  /**
   * On Edit Button
   * @param flatDetails
   */
  onEdit(flatDetails: FlatDetails) {
    this.router.navigate(['edit-flatdetails', flatDetails.flatNumber])
  }

}
