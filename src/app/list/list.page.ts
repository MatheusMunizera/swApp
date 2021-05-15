import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { AlertController, LoadingController } from '@ionic/angular';
import { SwAppService } from '../services/sw-app.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  public currentFilter = this.swService.currentFilter
  public currentSearch = this.swService.currentSearch
  public currentItem = this.swService.currentItem
  
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
    await this.swService.runPop();
    this.swService.caracter = this.swService.characterList;
    this.swService.vehicle = this.swService.vehiclesList;
    this.swService.planet = this.swService.planetsList;
    this.swService.specie = this.swService.speciesList;
    this.currentItem = this.swService.caracter;
    await loading.dismiss();    
  }

  ngOnInit() {
    this.presentLoading();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  public updateFilter() {
    let firstFilter = [];
    if (this.currentFilter === 'characteres') {
      firstFilter = this.swService.caracter;
    } else if (this.currentFilter === 'vehicless') {
      firstFilter = this.swService.vehicle
    } else if (this.currentFilter === 'planetss') {
      firstFilter = this.swService.planet
    } else if (this.currentFilter === 'speciess'){
      firstFilter = this.swService.specie;
    }

    if(this.currentSearch === ''){
      this.currentItem = firstFilter;
    }else {
      const lowerCase = this.currentSearch.toLowerCase();
      this.currentItem = firstFilter.filter(item => item.name.toLowerCase().includes(lowerCase));
    }
  }


  returnItem(item){
    if (this.currentFilter === 'characteres') {
      this.swService.selectedCaracter = item;
      console.log(this.swService.selectedCaracter);
    } else if (this.currentFilter === 'vehicless') {
      this.swService.selectedVehicle = item;
      console.log(this.swService.selectedVehicle);
    } else if (this.currentFilter === 'planetss') {
      this.swService.selectedPlanet = item;
      console.log(this.swService.selectedPlanet);
    } else if (this.currentFilter === 'speciess'){
      this.swService.selectedSpecie = item;
      console.log(this.swService.selectedSpecie);
    }    
  }




  
  
}