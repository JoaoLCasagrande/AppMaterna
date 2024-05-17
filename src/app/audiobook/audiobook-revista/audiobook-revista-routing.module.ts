import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiobookRevistaPage } from './audiobook-revista.page';

const routes: Routes = [
  {
    path: '',
    component: AudiobookRevistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiobookRevistaPageRoutingModule {}
