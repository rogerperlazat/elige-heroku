import { GradesService } from './../shared/services/grades/grades.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  public gradeForm: FormGroup;
  public grades: any;

  constructor(private formBuilder: FormBuilder,
    private gradesService: GradesService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getGrades();
  }

  createForm() {
    this.gradeForm = this.formBuilder.group({
      grade: ["", [Validators.required]],
      title: ["", [Validators.required]]
    });
  }


  saveGrade() {
    if(this.gradeForm.invalid){
      return;
    }

    this.gradesService.setGrade(this.gradeForm.value).subscribe((res: any) => {
        this.getGrades();
    });
  }

  getGrades() {
    this.gradesService.getGrades().subscribe((res: any) => {
      this.grades = res;
    });
  }

}
