import { GradesService } from './../shared/services/grades/grades.service';
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
  public gradesForm: FormGroup;
  public corporations: any;
  public grades: any;

  constructor(private formBuilder: FormBuilder,
    private corporationsService: CorporationsService,
    private gradesService: GradesService) {

    this.createForm();
  }

  ngOnInit(): void {
    this.getCorporations();
    this.getGrades();
  }

  createForm() {
    this.corporationsForm = this.formBuilder.group({
      corporation: ["", [Validators.required]],
      image: ["", [Validators.required]],
      time: ["", [Validators.required]],
      status: ["", [Validators.required]]
    });

    this.gradesForm = this.formBuilder.group({
      idCorporation: ["", [Validators.required]],
      idGrade: ["", [Validators.required]]
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

  getGrades() {
    this.gradesService.getGrades().subscribe((res: any) => {
      this.grades = res;
    });
  }

  activeCorporation(active: number, idCorporation: string){
    this.corporationsService.activeCorporation(active, idCorporation).subscribe((res: any) => {
      this.getCorporations();
  });
  }

  saveGradesorporations() {
    if(this.gradesForm.invalid){
      return;
    }

    this.corporationsService.addGradesCorporation(this.gradesForm.value).subscribe((res: any) => {
        this.getCorporations();
    });
  }




}
