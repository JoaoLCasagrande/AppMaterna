import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiobookRevistaPageRoutingModule } from './audiobook-revista-routing.module';

import { AudiobookRevistaPage } from './audiobook-revista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiobookRevistaPageRoutingModule
  ],
  declarations: [AudiobookRevistaPage]
})
export class AudiobookRevistaPageModule {}
