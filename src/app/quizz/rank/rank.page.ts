import { Component, OnInit } from '@angular/core';
import { SwAppService } from 'src/app/services/sw-app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {

  constructor( private navCtrl: NavController, private swService: SwAppService) { }


  public ranks = []
  
  goQuizz(){
    this.navCtrl.back();
  }
  ngOnInit() {
    this.ranks =  this.swService.ranks
}

}
