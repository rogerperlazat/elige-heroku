import { CandidatesService } from './../shared/services/candidates/candidates.service';
import { CorporationsService } from './../shared/services/corporations/corporations.service';
import { GroupsService } from './../shared/services/groups/groups.service';
import { VoterService } from './../shared/services/voter/voter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  public candidatesForm: FormGroup;
  public voters: any;
  public groups: any;
  public corporations: any;
  public candidates: any;

  constructor(private formBuilder: FormBuilder,
    private voterService: VoterService,
    private groupsService: GroupsService,
    private corporationsService: CorporationsService,
    private candidatesService: CandidatesService) {
      this.createForm();
      this.getVoters();
      this.getGroups();
      this.getCorporations();
  }

  ngOnInit(): void {
    this.getCandidates();
  }

  createForm() {
    this.candidatesForm = this.formBuilder.group({
      idVoter: ["", [Validators.required]],
      idCorporation: ["", [Validators.required]],
      cardNumber: ["", [Validators.required]],
      image: ["", [Validators.required]],
      type: ["", [Validators.required]],
      status: ["", [Validators.required]]
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

  getCorporations() {
    this.corporationsService.getCorporations().subscribe((res: any) => {
      this.corporations = res;
    });
  }

  saveCandidate() {
    if(this.candidatesForm.invalid){
      return;
    }

    this.candidatesService.setCandidate(this.candidatesForm.value).subscribe((res: any) => {
        this.getCandidates();
    });
  }

  getCandidates() {
    this.candidatesService.getCandidates().subscribe((res: any) => {
      this.candidates = res;
    });
  }

}
