import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FimQuizFisioterapiaPageRoutingModule } from './fim-quiz-fisioterapia-routing.module';

import { FimQuizFisioterapiaPage } from './fim-quiz-fisioterapia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FimQuizFisioterapiaPageRoutingModule
  ],
  declarations: [FimQuizFisioterapiaPage]
})
export class FimQuizFisioterapiaPageModule {}
