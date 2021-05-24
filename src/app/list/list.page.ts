import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { SwAppService } from '../services/sw-app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public currentFilter: 'characters' | 'vehicles' | 'planets' | 'species' = 'characters';
  public currentSearch = '';
  public currentItem = [];

  constructor(
    public loadingController: LoadingController,
    private swService: SwAppService
  ) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: '<img src="/assets/gif/loading.gif">',
      spinner: null,
    });
    await loading.present();
    this.currentItem = this.swService.characterList;
    await loading.dismiss();
  }

u
  async ngOnInit() {
    
    await this.swService.runPop();
    await this.presentLoading();
  }

  public updateFilter() {
    let firstFilter = [];
    if (this.currentFilter === 'characters') {
      firstFilter = this.swService.characterList;
    } else if (this.currentFilter === 'vehicles') {
      firstFilter = this.swService.vehiclesList;
    } else if (this.currentFilter === 'planets') {
      firstFilter = this.swService.planetsList;
    } else if (this.currentFilter === 'species') {
      firstFilter = this.swService.speciesList;
    }

    if (this.currentSearch === '') {
      this.currentItem = firstFilter;
    } else {
      const lowerCase = this.currentSearch.toLowerCase();
      this.currentItem = firstFilter.filter((item) =>
        item.name.toLowerCase().includes(lowerCase)
      );
    }
  }
}
