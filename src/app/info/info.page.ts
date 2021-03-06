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
  segmentCard = 'Tech';

  constructor(private route: ActivatedRoute, private swService: SwAppService) {
    const id = route.snapshot.paramMap.get('id');
    const type = route.snapshot.paramMap.get('type')
    this.loadInfo(type,id);
  }


  ngOnInit() {
    
  }

  public typeItem
  public currentItem;
  
  private loadInfo(type: string, id) {
    this.typeItem = type
    const list  = this.swService[type + 'List']
    this.currentItem = list[id - 1 ]
   }
      
}
