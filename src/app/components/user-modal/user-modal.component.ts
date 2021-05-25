
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwAppService } from 'src/app/services/sw-app.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {

  @Input() username
  constructor(private modalController: ModalController,
     private swService: SwAppService,
     route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {}

  goQuizz(){
    this.swService.newUser = this.username
    this.closeModal()
  }
  
  closeModal(){
    this.modalController.dismiss();
  }

  goRank(){
    this.navCtrl.navigateBack('/quizz/rank')
    this.closeModal()
  }
  
}
