import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Plugins, Capacitor } from '@capacitor/core'; // Native version
import { YoutubePlayerWeb } from 'capacitor-youtube-player'
import { SwAppService } from '../services/sw-app.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  
  constructor( private swService: SwAppService, public loadingController: LoadingController) {
   
   }
   public currentItem = []
  ngOnInit() {
  }
  public teste = true;
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

  async openPage(url: string){
    await Browser.open({toolbarColor: "#ffc500", url: url})

    }


  async ngAfterViewInit() {
    await this.presentLoading();
    this.currentItem = this.swService.filmsList
    
  }


  async youtubePlayerNative(url: String) {
    let str = url.substring(17,28)
    const { YoutubePlayer } = Plugins;
    const options = {player: 'youtube-player', width: 932, height: 524, videoId: str};
   const playerReady = await YoutubePlayer.initialize(options);

  }

 
  
  


}
