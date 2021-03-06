import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzPage } from './quizz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzPage
  },
  {
    path: 'rank',
    loadChildren: () => import('./rank/rank.module').then( m => m.RankPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzPageRoutingModule {}
