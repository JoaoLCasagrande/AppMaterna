import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FimQuizNutricaoPage } from './fim-quiz-nutricao.page';

const routes: Routes = [
  {
    path: '',
    component: FimQuizNutricaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FimQuizNutricaoPageRoutingModule {}
