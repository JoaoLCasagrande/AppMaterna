import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FimQuizFisioterapiaPage } from './fim-quiz-fisioterapia.page';

const routes: Routes = [
  {
    path: '',
    component: FimQuizFisioterapiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FimQuizFisioterapiaPageRoutingModule {}
