import { CorporationsService } from './../shared/services/corporations/corporations.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporation-voter',
  templateUrl: './corporation-voter.component.html',
  styleUrls: ['./corporation-voter.component.scss']
})
export class CorporationVoterComponent implements OnInit {

  public corporations: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private corporationsService: CorporationsService) { }

  ngOnInit(): void {
    this.getCorporations();
  }

  getCorporations() {
    this.corporationsService.getCorporations().subscribe((res: any) => {
      this.corporations = res;
    });
  }

  voteCorporation(id: string){
    this.router.navigate(["votar-candidato", { corporation: id }]);
  }

}
