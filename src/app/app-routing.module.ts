import { ResultsComponent } from './results/results.component';
import { GuardGuard } from './shared/guard/guard.guard';
import { CandidateVoteComponent } from './candidate-vote/candidate-vote.component';
import { CorporationVoterComponent } from './corporation-voter/corporation-voter.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { VoterComponent } from './voter/voter.component';
import { GroupsComponent } from './groups/groups.component';
import { GradesComponent } from './grades/grades.component';
import { CorporationsComponent } from './corporations/corporations.component';
import { AuthComponent } from './auth/auth.component';
import { SearchVotersComponent } from './search-voters/search-voters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchVotersComponent
  },
  {
    path: 'registro',
    canActivate: [GuardGuard],
    component: AuthComponent
  },
  {
    path: 'corporaciones',
    component: CorporationsComponent
  },
  {
    path: 'grados',
    component: GradesComponent
  },
  {
    path: 'grupos',
    component: GroupsComponent
  },
  {
    path: 'votantes',
    component: VoterComponent
  },
  {
    path: 'candidatos',
    component: CandidatesComponent
  },
  {
    path: 'selecionar-corporacion',
    canActivate: [GuardGuard],
    component: CorporationVoterComponent
  },
  {
    path: 'votar-candidato',
    canActivate: [GuardGuard],
    component: CandidateVoteComponent
  },
  {
    path: 'resultados-votaciones',
    component: ResultsComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
