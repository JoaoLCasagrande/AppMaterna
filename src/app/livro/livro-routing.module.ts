import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroPage } from './livro.page';

const routes: Routes = [
  {
    path: '',
    component: LivroPage
  },
  {
    path: 'livro-meu',
    loadChildren: () => import('./livro-meu/livro-meu.module').then( m => m.LivroMeuPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroPageRoutingModule {}
