import { CandidatesService } from './../shared/services/candidates/candidates.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-vote',
  templateUrl: './candidate-vote.component.html',
  styleUrls: ['./candidate-vote.component.scss']
})
export class CandidateVoteComponent implements OnInit {

  public candidates: any;
  public corporation: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.corporation = this.route.snapshot.params.corporation;
    this.getCandidatesCorporation(this.corporation);
  }

  getCandidatesCorporation(corporation: string) {
    this.candidatesService.getCandidatesCorporation(corporation).subscribe((res: any) => {
      this.candidates = res;
    });
  }

  voteCorporation(){
    this.router.navigate(["votar-candidato"]);
  }


}
