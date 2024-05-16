import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivroMeuPageRoutingModule } from './livro-meu-routing.module';

import { LivroMeuPage } from './livro-meu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivroMeuPageRoutingModule
  ],
  declarations: [LivroMeuPage]
})
export class LivroMeuPageModule {}
