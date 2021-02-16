import { VotersService } from './../shared/services/voters/voters.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-voters',
  templateUrl: './search-voters.component.html',
  styleUrls: ['./search-voters.component.scss']
})
export class SearchVotersComponent implements OnInit {

  public identificationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private votersService: VotersService) {

    this.createForm();
   }


  ngOnInit(): void {
  }

  createForm(){
    this.identificationForm = this.formBuilder.group({
      type: ["", [Validators.required]],
      number: ["", [Validators.required]]
    });
  }

  searchVoter(){

    if(this.identificationForm.invalid){
      return;
    }

    this.votersService.getVoter(this.identificationForm.value).subscribe((res: any) => {
      if(res.lenght != 0){
        this.router.navigate(["registro", { voter: res[0]._id }]);
      }
    });
  }

}
