import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizFisioterapiaPageRoutingModule } from './quiz-fisioterapia-routing.module';

import { QuizFisioterapiaPage } from './quiz-fisioterapia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizFisioterapiaPageRoutingModule
  ],
  declarations: [QuizFisioterapiaPage]
})
export class QuizFisioterapiaPageModule {}
