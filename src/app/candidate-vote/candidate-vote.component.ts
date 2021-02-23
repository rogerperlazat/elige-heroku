import { VoterService } from './../shared/services/voter/voter.service';
import { CandidatesService } from './../shared/services/candidates/candidates.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-candidate-vote',
  templateUrl: './candidate-vote.component.html',
  styleUrls: ['./candidate-vote.component.scss']
})
export class CandidateVoteComponent implements OnInit {

  public votesForm: FormGroup;
  public corporations: any;
  public corporation: string;
  public voter: string = localStorage.getItem("name");

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private candidatesService: CandidatesService,
    private _location: Location,
    private voterService: VoterService) { }

  ngOnInit(): void {
    this.corporation = this.route.snapshot.params.corporation;
    this.getCandidatesCorporation(this.corporation);
    this.createForm();
  }


  createForm() {
    this.votesForm = this.formBuilder.group({
      idCorporation: [this.corporation],
      idCandidate: ["", [Validators.required]],
      idVoter: [""]
    });
  }

  getCandidatesCorporation(corporation: string) {
    this.candidatesService.getCandidatesCorporation(corporation).subscribe((res: any) => {
      this.corporations = res;
    });
  }

  voteCorporation() {

    if(this.votesForm.invalid){
      return;
    }

    let vote: any = this.votesForm.value;
    vote.idVoter = localStorage.getItem("idVoter");
    this.voterService.setVote(vote).subscribe((res: any) => {
      this.corporations = res;
      this.openSnackBar("Gracias por su voto", "");
      this.router.navigate(["selecionar-corporacion"]);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 200,
    });
  }

  back(){
    this._location.back();
  }

}
