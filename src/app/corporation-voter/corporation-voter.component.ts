import { GroupsService } from './../shared/services/groups/groups.service';
import { VoterService } from './../shared/services/voter/voter.service';
import { CorporationsService } from './../shared/services/corporations/corporations.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-corporation-voter',
  templateUrl: './corporation-voter.component.html',
  styleUrls: ['./corporation-voter.component.scss']
})
export class CorporationVoterComponent implements OnInit {

  public corporations: any;
  public voter: string = localStorage.getItem("name");

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private voterService: VoterService,
    private _snackBar: MatSnackBar,
    private groupsService: GroupsService,
    private corporationsService: CorporationsService) { }

  ngOnInit(): void {
    this.getGroups(localStorage.getItem("idGroup"));

  }

  getCorporations(idGrade: string) {
    this.corporationsService.getCorporationsGrades(idGrade).subscribe((res: any) => {
      this.corporations = res;
    });
  }

  voteCorporation(id: string) {
    this.getVotesByVoter(id);
  }


  getVotesByVoter(idCorporation: string) {
    let dataVoter: any = {};
    dataVoter.idVoter = localStorage.getItem("idVoter");
    dataVoter.idCorporation = idCorporation;
    console.log(dataVoter);
    this.voterService.getStatusVote(dataVoter).subscribe((res: any) => {
      if(res.length){
        this.openSnackBar("Ya realizo esta votacion", "");
      }else{
        this.router.navigate(["votar-candidato", { corporation: idCorporation }]);
      }
    });
  }

  getGroups(idGroup: string) {
    this.groupsService.getGroup(idGroup).subscribe((res: any) => {
      this.getCorporations(res.idGrade);
    });
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }

}
