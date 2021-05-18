import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: ':type/:id',
    component: InfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
