import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpeningcrawlPageRoutingModule } from './openingcrawl-routing.module';

import { OpeningcrawlPage } from './openingcrawl.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpeningcrawlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OpeningcrawlPage]
})
export class OpeningcrawlPageModule {}
