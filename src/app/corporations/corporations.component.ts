import { CorporationsService } from './../shared/services/corporations/corporations.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporations',
  templateUrl: './corporations.component.html',
  styleUrls: ['./corporations.component.scss']
})
export class CorporationsComponent implements OnInit {


  public corporationsForm: FormGroup;
  public corporations: any;
  public grades: any;

  constructor(private formBuilder: FormBuilder,
    private corporationsService: CorporationsService) {

    this.createForm();
  }

  ngOnInit(): void {
    this.getCorporations();
  }

  createForm() {
    this.corporationsForm = this.formBuilder.group({
      corporation: ["", [Validators.required]],
      image: ["", [Validators.required]],
      time: ["", [Validators.required]],
      status: ["", [Validators.required]]
    });
  }


  saveCorporations() {
    if(this.corporationsForm.invalid){
      return;
    }

    this.corporationsService.setCorporation(this.corporationsForm.value).subscribe((res: any) => {
        this.getCorporations();
    });
  }

  getCorporations() {
    this.corporationsService.getCorporations().subscribe((res: any) => {
      this.corporations = res;
    });
  }




}
