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
    const user = route.snapshot.paramMap.get('id');
    console.log(user);
    this.checkType(user);

    let x = this.typeItem
    console.log(this.typeItem)
  }


  ngOnInit() {}

  public typeItem
  

  public currentItem;

  private loadInfo(type: string, id) {
    switch (type) {
      case 'characters':
        this.typeItem = 'characters';
        this.currentItem = this.swService.characterList[id - 1];
        break;
      case 'planets':
        this.typeItem = 'planets';
        this.currentItem = this.swService.planetsList[id - 1];
        break;
      case 'species':
        this.typeItem = 'species';
        this.currentItem = this.swService.speciesList[id - 1];
        break;
      case 'vehicles':
        this.typeItem = 'vehicles';
        this.currentItem = this.swService.vehiclesList[id - 1];
        break;
    }
  }
      
  private checkType(item: string) {
    let separator = item.split('/');
    let type = separator[0];
    let id = separator[1];

    this.loadInfo(type, id);
  }

}
