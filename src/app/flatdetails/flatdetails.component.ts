import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatDetailsService } from '../shared/flatDetailsService';
import { FlatDetails } from './flatdetails';

@Component({
  selector: 'app-flatdetails',
  templateUrl: './flatdetails.component.html',
  styleUrls: ['./flatdetails.component.css']
})
export class FlatdetailsComponent implements OnInit {

  flatDetails!: FlatDetails;
    id: number = 0;
    public isRented: boolean=false;

  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: FlatDetailsService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
        this.service.getFlatDetailsById(this.id).subscribe(
            (data) => {
                console.log(data);
                this.flatDetails = data;
                this.isRented=this.flatDetails.isRented
            },
            (err) => console.log(err)
        );
  }

  onBack(){
    this.router.navigate(['flatDetails']);
}

}
