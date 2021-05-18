import { Component, OnInit } from '@angular/core';
import { SwAppService } from 'src/app/services/sw-app.service';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-rank-modal',
  templateUrl: './rank-modal.component.html',
  styleUrls: ['./rank-modal.component.scss'],
})
export class RankModalComponent implements OnInit {

  constructor(private modalController: ModalController, private swService: SwAppService) { }


  public ranks = []
  
  

  goQuizz(){
    console.log(this.ranks)
    this.modalController.dismiss();
  }
  ngOnInit() {

    this.ranks =  this.swService.ranks
}

}
