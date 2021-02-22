import { VotersService } from './../shared/services/voters/voters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public detailVoter: any = {};
  public voter: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private votersService: VotersService) { }

  ngOnInit(): void {
    this.voter = this.route.snapshot.params.voter;
    this.getVoter(this.voter);
    localStorage.setItem("idVoter", this.voter);
  }

  getVoter(voter: string){
    this.votersService.getVoterById(voter).subscribe((res: any) => {
      this.detailVoter = res;
      console.log(res)
    });
  }

}
