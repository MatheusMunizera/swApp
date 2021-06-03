import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Plugins, Capacitor } from '@capacitor/core'; // Native version
import { YoutubePlayerWeb } from 'capacitor-youtube-player';
import { SwAppService } from '../services/sw-app.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  constructor(
    private swService: SwAppService,
    public loadingController: LoadingController
  ) {}
  public currentItem = [];

  ngOnInit() {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: '<img src="/assets/gif/loading.gif">',
      spinner: null,
    });
    await this.swService.requestAll();
    await loading.present();
    await loading.dismiss();
  }

  async openBrowser(url: string) {
    await Browser.open({ 
      toolbarColor: '#ffc500', 
      url: url, 
    });
  }

  async ngAfterViewInit() {
    await this.presentLoading();
    this.currentItem = this.swService.seriesList;
  }
}
