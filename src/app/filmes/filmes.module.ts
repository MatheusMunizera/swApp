import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmesPageRoutingModule } from './filmes-routing.module';

import { FilmesPage } from './filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmesPageRoutingModule
  ],
  declarations: [FilmesPage]
})
export class FilmesPageModule {}
