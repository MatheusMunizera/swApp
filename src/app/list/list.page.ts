
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { SwAppService } from '../services/sw-app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public currentFilter: 'characters' | 'vehicles' | 'planets' | 'species' | 'films' = 'characters';
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
    await this.swService.requestAll();
    await loading.present();
    this.currentItem = this.swService.charactersList;
    await loading.dismiss();
  }


  async ngOnInit() {
 
  }

  async ngAfterViewInit(){
   await  this.presentLoading();
  }
 
  public updateFilter(){
    const currentList = this.currentFilter + 'List'
    const firstFilter = this.swService[currentList]

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
