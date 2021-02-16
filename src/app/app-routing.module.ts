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
    component: AuthComponent
  },
  {
    path: 'corporaciones',
    component: CorporationsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
