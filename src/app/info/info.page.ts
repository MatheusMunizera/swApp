import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwAppService } from '../services/sw-app.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  readonly apiUrl = 'https://matheusmunizera.github.io/starwars-api/api/';
  segmentCard = '';

  constructor(private route: ActivatedRoute, private swService: SwAppService) {
    const id = route.snapshot.paramMap.get('id');
    const type = route.snapshot.paramMap.get('type')
    console.log(id);
    console.log(type)
    this.loadInfo(type,id);
   
  }


  ngOnInit() {}

  public typeItem
  public currentItem;

  private loadInfo(type: string, id) {
    this.typeItem = type
    switch (type) {
      case 'characters':
        this.currentItem = this.swService.characterList[id - 1];
        break;
      case 'planets':
        this.currentItem = this.swService.planetsList[id - 1];
        break;
      case 'species':
        this.currentItem = this.swService.speciesList[id - 1];
        break;
      case 'vehicles':
        this.currentItem = this.swService.vehiclesList[id - 1];
        break;
    }
  }
      
}
