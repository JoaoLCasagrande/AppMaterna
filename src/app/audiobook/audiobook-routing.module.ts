import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiobookPage } from './audiobook.page';

const routes: Routes = [
  {
    path: '',
    component: AudiobookPage
  },  {
    path: 'audiobook-meu',
    loadChildren: () => import('./audiobook-meu/audiobook-meu.module').then( m => m.AudiobookMeuPageModule)
  },
  {
    path: 'audiobook-revista',
    loadChildren: () => import('./audiobook-revista/audiobook-revista.module').then( m => m.AudiobookRevistaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiobookPageRoutingModule {}
