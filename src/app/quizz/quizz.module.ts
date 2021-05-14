import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzPageRoutingModule } from './quizz-routing.module';

import { QuizzPage } from './quizz.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [QuizzPage]
})
export class QuizzPageModule {}
