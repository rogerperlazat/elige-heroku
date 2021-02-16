import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-voters',
  templateUrl: './search-voters.component.html',
  styleUrls: ['./search-voters.component.scss']
})
export class SearchVotersComponent implements OnInit {

  public identificationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.createForm();
   }


  ngOnInit(): void {
  }

  createForm(){
    this.identificationForm = this.formBuilder.group({
      type: ["", [Validators.required]],
      number: ["", [Validators.required]]
    });
  }

}
