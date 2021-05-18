
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwAppService } from 'src/app/services/sw-app.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {

  constructor(private modalController: ModalController, private swService: SwAppService) { }

  ngOnInit() {}


  public username = ''
  

  goQuizz(){
    this.swService.newUser = this.username
    //console.log(this.swService.ranks)
    this.modalController.dismiss();
  }
}
