import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FimQuizNutricaoPageRoutingModule } from './fim-quiz-nutricao-routing.module';

import { FimQuizNutricaoPage } from './fim-quiz-nutricao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FimQuizNutricaoPageRoutingModule
  ],
  declarations: [FimQuizNutricaoPage]
})
export class FimQuizNutricaoPageModule {}
