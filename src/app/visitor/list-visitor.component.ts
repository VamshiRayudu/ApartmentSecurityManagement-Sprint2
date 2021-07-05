import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private flatNumber: number=0;
    public isGuard: boolean=false;

  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: VisitorService) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if(role == "GUARD")
    {
        this.isGuard=true;
    }
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
        this.service.getVisitorByFlatId(this.id).subscribe(
          (data: Visitor[]) => {
            console.log(data);
            this.visitors = data;
        },
        (err: any) => console.log(err)
        );
  }

  onEdit(visitor: Visitor){
    this.router.navigate(['update-visitor',visitor.id]);
  }
  
  onBack(){
    this.router.navigate(['deliveries']);
}

}
