import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesPage } from './filmes.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesPageRoutingModule {}
