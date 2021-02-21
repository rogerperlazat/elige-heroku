import { GradesService } from './../shared/services/grades/grades.service';
import { GroupsService } from './../shared/services/groups/groups.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {


  public groupForm: FormGroup;
  public groups: any;
  public grades: any;

  constructor(private formBuilder: FormBuilder,
    private groupsService: GroupsService,
    private gradesService: GradesService) {

    this.createForm();
    this.getGrades();
  }

  ngOnInit(): void {
    this.getGroups();
  }

  createForm() {
    this.groupForm = this.formBuilder.group({
      group: ["", [Validators.required]],
      idGrade: ["", [Validators.required]],
      campus: ["", [Validators.required]],
      time: ["", [Validators.required]]
    });
  }


  saveGroup() {
    if(this.groupForm.invalid){
      return;
    }

    this.groupsService.setGroup(this.groupForm.value).subscribe((res: any) => {
        this.getGroups();
    });
  }

  getGroups() {
    this.groupsService.getGroups().subscribe((res: any) => {
      this.groups = res;
    });
  }

  getGrades() {
    this.gradesService.getGrades().subscribe((res: any) => {
      this.grades = res;
    });
  }


}
