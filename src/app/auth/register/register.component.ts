import { VotersService } from './../../shared/services/voters/voters.service';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() idVoter: string;

  public errorMessage: string;
  public successMessage: string;

  public registerForm: FormGroup;

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private votersService: VotersService) {
    this.createFormRegister();
  }

  ngOnInit() {
  }

  createFormRegister() {
    this.registerForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      nit: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      names: ['', Validators.required],
      surnames: ['', Validators.required],
    });
  }

  displayFnSearchCountry(){

  }

  displayFnSearchCity(){

  }


  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      const voter:any = {};
      voter.uid = res.user.uid;
      localStorage.setItem("token", res.user.refreshToken)
      this.votersService.updateVoterById(this.idVoter, voter).subscribe((res: any) => {
        if(res._id){
          this.router.navigate(["selecionar-corporacion"]);
        }
      });
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

}
