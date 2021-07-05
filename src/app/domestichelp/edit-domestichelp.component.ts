import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DomesticHelpService } from '../shared/domesticHelpService';
import { DomesticHelp } from './domesticHelp';

@Component({
  selector: 'app-edit-domestichelp',
  templateUrl: './edit-domestichelp.component.html',
  styleUrls: ['./edit-domestichelp.component.css']
})
export class EditDomestichelpComponent implements OnInit {

  dHelp!: DomesticHelp;
  editDHelpForm!: FormGroup;
  id: number = 0;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: DomesticHelpService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getDomesticHelpById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.dHelp = data;
        this.editDHelpForm = this.formBuilder.group({

          id: this.dHelp.id,
          helpType: this.dHelp.helpType

        })
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {

    console.log('form onSubmit of edit domestichelp' + this.editDHelpForm.value);
    this.service.updateDomesticHelpById(this.id, this.editDHelpForm.value).
      subscribe(
        (data) => {
          this.dHelp = data;
          this.router.navigate(['flatDetails'])
        },
        (err) => { console.log(err) }
      )
  }

}
