import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchVotersComponent } from './search-voters/search-voters.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AuthComponent } from './auth/auth.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';



import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CorporationsComponent } from './corporations/corporations.component';
import { GradesComponent } from './grades/grades.component';
import { GroupsComponent } from './groups/groups.component';
import { VoterComponent } from './voter/voter.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CorporationVoterComponent } from './corporation-voter/corporation-voter.component';
import { CandidateVoteComponent } from './candidate-vote/candidate-vote.component';
import { FooterComponent } from './footer/footer.component';
import { PosfooterComponent } from './posfooter/posfooter.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchVotersComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    CorporationsComponent,
    GradesComponent,
    GroupsComponent,
    VoterComponent,
    CandidatesComponent,
    CorporationVoterComponent,
    CandidateVoteComponent,
    FooterComponent,
    PosfooterComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatRippleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAtq-mDMZDdyIF1ptIkJVPQ8xODnlaCztc",
      authDomain: "elige-heroku.firebaseapp.com",
      projectId: "elige-heroku",
      storageBucket: "elige-heroku.appspot.com",
      messagingSenderId: "996775878173",
      appId: "1:996775878173:web:3430dbad50d2df02b3b0f4"
    }),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
