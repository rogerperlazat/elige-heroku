import { CandidatesService } from './../shared/services/candidates/candidates.service';
import { CorporationsService } from './../shared/services/corporations/corporations.service';
import { GroupsService } from './../shared/services/groups/groups.service';
import { VoterService } from './../shared/services/voter/voter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VotersService } from '../shared/services/voters/voters.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {


  public candidatesForm: FormGroup;
  public voters: any;
  public groups: any;
  public corporations: any;
  public candidates: any;

  constructor(private formBuilder: FormBuilder,
    private votesService: VotersService,
    private groupsService: GroupsService,
    private corporationsService: CorporationsService,
    private candidatesService: CandidatesService) {
  }

  ngOnInit(): void {
    this.getVotes();
  }

  // createForm() {
  //   this.candidatesForm = this.formBuilder.group({
  //     idVoter: ["", [Validators.required]],
  //     idCorporation: ["", [Validators.required]],
  //     cardNumber: ["", [Validators.required]],
  //     image: ["", [Validators.required]],
  //     type: ["", [Validators.required]],
  //     status: ["", [Validators.required]]
  //   });
  // }

  // getVoters() {
  //   this.voterService.getVoter().subscribe((res: any) => {
  //     this.voters = res;
  //   });
  // }

  // getGroups() {
  //   this.groupsService.getGroups().subscribe((res: any) => {
  //     this.groups = res;
  //   });
  // }

  // getCorporations() {
  //   this.corporationsService.getCorporations().subscribe((res: any) => {
  //     this.corporations = res;
  //   });
  // }

  // saveCandidate() {
  //   if(this.candidatesForm.invalid){
  //     return;
  //   }

  //   this.candidatesService.setCandidate(this.candidatesForm.value).subscribe((res: any) => {
  //       this.getCandidates();
  //   });
  // }

  getVotes() {
    this.votesService.getVotes().subscribe((res: any) => {
      this.candidates = res;

      let index = 0;
      for(var candidate of this.candidates){
        console.log(candidate);
        this.getCorporation(candidate["_id"], index)
        index++;
      }

    });
  }

  getCorporation(id, index) {
    this.votesService.getCorporationCandidate(id).subscribe((res: any) => {
      this.candidates[index].candidates = res[0];
    });
  }

}
