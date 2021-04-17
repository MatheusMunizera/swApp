import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
