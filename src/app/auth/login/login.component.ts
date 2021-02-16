import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { AuthService } from '../../../app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {

    this.createFormAuth();

  }

  public email: string = '';
  public password: string = '';


  public errorMessage: string;
  public successMessage: string;

  public loginForm: FormGroup;


  ngOnInit() {
  }

  createFormAuth() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.router.navigate(["corporaciones"]);
      this.errorMessage = "";
      this.successMessage = res;
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

}
