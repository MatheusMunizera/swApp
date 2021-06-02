import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwAppService } from '../services/sw-app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-openingcrawl',
  templateUrl: './openingcrawl.page.html',
  styleUrls: ['./openingcrawl.page.scss'],
})
export class OpeningcrawlPage implements OnInit {

  
  constructor(private route: ActivatedRoute, private swService: SwAppService,private navController: NavController) {
    const id = route.snapshot.paramMap.get('id');
    this.loadInfo(id)
  }

  ngOnInit() {
  }

  public currentItem;

  private loadInfo(id) {
    this.currentItem = this.swService.filmsList[id - 1 ]
   }


}
