import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { NgxMaskModule } from 'ngx-mask';

import { GovindaDasComponent } from './govinda-das/govinda-das.component';
import { HomeComponent } from './home/home.component';
import { TulasiDasComponent } from './tulasi-das/tulasi-das.component';
import { TaruniGopiComponent } from './taruni-gopi/taruni-gopi.component';
import { LilaGovindaComponent } from './lila-govinda/lila-govinda.component';
import { CheckListComponent } from './check-list/check-list.component';
import { FormPopupComponent } from './govinda-das/form-popup/form-popup.component';
import { FormLilaComponent } from './lila-govinda/form-lila/form-lila.component';

@NgModule({
  declarations: [
    HomeComponent,
    GovindaDasComponent,
    TulasiDasComponent,
    TaruniGopiComponent,
    LilaGovindaComponent,
    CheckListComponent,
    FormPopupComponent,
    FormLilaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    HomeComponent,
    GovindaDasComponent,
    TulasiDasComponent,
    TaruniGopiComponent,
    LilaGovindaComponent,
  ]
})
export class ContentModule { }
