import { GroupsService } from './../shared/services/groups/groups.service';
import { VoterService } from './../shared/services/voter/voter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  public voterForm: FormGroup;
  public voters: any;
  public groups: any;

  constructor(private formBuilder: FormBuilder,
    private voterService: VoterService,
    private groupsService: GroupsService) {
    this.createForm();
    this.getGroups();
  }

  ngOnInit(): void {
    this.getVoters();
  }

  createForm() {
    this.voterForm = this.formBuilder.group({
      idPiType: ["", [Validators.required]],
      piNumber: ["", [Validators.required]],
      name: ["", [Validators.required]],
      groupId: ["", [Validators.required]],
      hasVoted: [false]
    });
  }


  saveVoter() {
    if(this.voterForm.invalid){
      return;
    }

    this.voterService.setVoter(this.voterForm.value).subscribe((res: any) => {
        this.getVoters();
    });
  }

  getVoters() {
    this.voterService.getVoter().subscribe((res: any) => {
      this.voters = res;
    });
  }

  getGroups() {
    this.groupsService.getGroups().subscribe((res: any) => {
      this.groups = res;
    });
  }


}
