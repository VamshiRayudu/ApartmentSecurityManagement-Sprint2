import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisitorService } from '../shared/visitorService';
import { Visitor } from './visitor';



@Component({
  selector: 'app-list-visitor',
  templateUrl: './list-visitor.component.html',
  styleUrls: ['./list-visitor.component.css']
})
export class ListVisitorComponent implements OnInit {

  visitors!: Visitor[];
  private error!: string;
  private id: number = 0;
  private flatNumber: number = 0;
  public isGuard: boolean = false;

  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: VisitorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if (role == "GUARD") {
      this.isGuard = true;
    }
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getVisitorByFlatId(this.id).subscribe(
      (data: Visitor[]) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.visitors = data;
      },
      (err: any) => {
        this.toastr.error('Failed to Fetch Visitor Details: Invalid Status');
        console.log(err)
      }
    );
  }

  /**
   * On Edit Button
   * @param visitor 
   */
  onEdit(visitor: Visitor) {
    this.router.navigate(['update-visitor', visitor.id]);
  }

  /**
   * On Back Button
   */
  onBack() {
    this.router.navigate(['flatDetails']);
  }

}
