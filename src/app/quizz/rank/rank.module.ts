import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPageRoutingModule } from './rank-routing.module';

import { RankPage } from './rank.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RankPage]
})
export class RankPageModule {}
