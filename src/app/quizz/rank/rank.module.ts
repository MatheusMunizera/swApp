import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPageRoutingModule } from './rank-routing.module';

import { RankPage } from './rank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPageRoutingModule
  ],
  declarations: [RankPage]
})
export class RankPageModule {}
