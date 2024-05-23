import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage
  },  {
    path: 'fim-quiz',
    loadChildren: () => import('./fim-quiz/fim-quiz.module').then( m => m.FimQuizPageModule)
  },
  {
    path: 'quiz-livro-meu',
    loadChildren: () => import('./quiz-livro-meu/quiz-livro-meu.module').then( m => m.QuizLivroMeuPageModule)
  },
  {
    path: 'quiz-nutricao',
    loadChildren: () => import('./quiz-nutricao/quiz-nutricao.module').then( m => m.QuizNutricaoPageModule)
  },
  {
    path: 'quiz-fisioterapia',
    loadChildren: () => import('./quiz-fisioterapia/quiz-fisioterapia.module').then( m => m.QuizFisioterapiaPageModule)
  },
  {
    path: 'fim-quiz-nutricao',
    loadChildren: () => import('./fim-quiz-nutricao/fim-quiz-nutricao.module').then( m => m.FimQuizNutricaoPageModule)
  },
  {
    path: 'fim-quiz-fisioterapia',
    loadChildren: () => import('./fim-quiz-fisioterapia/fim-quiz-fisioterapia.module').then( m => m.FimQuizFisioterapiaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
