import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { GovindaDasComponent } from './content/govinda-das/govinda-das.component';
import { TaruniGopiComponent } from './content/taruni-gopi/taruni-gopi.component';
import { TulasiDasComponent } from './content/tulasi-das/tulasi-das.component';
import { LilaGovindaComponent } from './content/lila-govinda/lila-govinda.component';
import { CheckListComponent } from './content/check-list/check-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'govinda-das', component: GovindaDasComponent},
  { path: 'taruni-gopi', component: TaruniGopiComponent},
  { path: 'tulasi-das', component: TulasiDasComponent},
  { path: 'lila-govinda', component: LilaGovindaComponent},
  { path: 'check-list', component: CheckListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
