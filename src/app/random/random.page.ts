import { Component, OnInit } from '@angular/core';
import { AnimationController, LoadingController } from '@ionic/angular';
import { SwAppService } from '../services/sw-app.service';
@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})

export class RandomPage implements OnInit {
  name: string;
  img: string;
  resume: string;
  id: number;
  lastGet: string;
  showCard: boolean = false;
  public requests: string[] = [];

  constructor(
    public animationCtrl: AnimationController,
    public loadingController: LoadingController,
    private swService: SwAppService
  ) {
  
  }

  public ngOnInit() {
     this.swService.runPop();
  }

  // ***************** ANIMAÇOES *************  \\
  private async cardBounceIn() {
    this.showCard = true;
    this.animationCtrl
      .create()
      .addElement(document.getElementById('card'))
      .duration(500)
      .easing('ease-in')
      .keyframes([
        { offset: 0, transform: 'scale(0)' },
        { offset: 0.7, transform: 'scale(1.2)' },
        { offset: 1, transform: 'scale(1)' },
      ])
      .play();
  }
  private async rollOut() {
    const planets = this.animationCtrl
      .create()
      .addElement(document.getElementsByName('planets'))
      .duration(100)
      .fromTo('transform', '', 'translateX(500px)');
    const species = this.animationCtrl
      .create()
      .addElement(document.getElementsByName('species'))
      .duration(100)
      .fromTo('transform', '', 'translateX(500px)');
    const vehicles = this.animationCtrl
      .create()
      .addElement(document.getElementsByName('vehicles')) 
      .duration(100)
      .fromTo('transform', '', 'translateX(500px)');
    const people = this.animationCtrl
      .create()
      .addElement(document.getElementsByName('characters'))
      .duration(100)
      .fromTo('transform', '', 'translateX(500px)');

    await planets.play();
    await species.play();
    await vehicles.play();
    await people.play();
  }
  // *******************************************  \\


  // Busca a informaçao na list e passa para que o LoadCard as carregue
  public getCharacter() {
    this.lastGet = "characters"
    return this.loadCard(this.swService.getCharacter());
  }
  public getVehicle() {
    this.lastGet = "vehicles"
    return this.loadCard(this.swService.getVehicle());
  }
  public getSpecie() {
    this.lastGet = "species"
    return this.loadCard(this.swService.getSpecie());
  }
  public getPlanet() {
    this.lastGet = "planets"
    return this.loadCard(this.swService.getPlanet());
  }


  // Set as informações necessárias
  private async setInfo(data) {
    this.id = data.id
    this.name = data.name;
    this.img = data.image;
    this.resume = data.resume;
    
  }

  // Loading async carregndo as informações e animações
  private async loadCard(data) {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: '<img src="/assets/gif/loading.gif">',
      spinner: null,
    });

    await loading.present();
    await this.rollOut();
    console.log(data)
    this.requests.push(data);
    await this.setInfo(data)
    await this.cardBounceIn();
    await loading.dismiss();
  }


  //Faz um nova requisição de acordo com o ultimo tipo selecionado
  public nextRequest() {
    switch (this.lastGet) {
      case 'characters':
        this.getCharacter();
        break;
      case 'vehicles':
        this.getVehicle();
        break;
      case 'species':
        this.getSpecie();
        break;
      case 'planets':
        this.getPlanet();
        break;
    }
  }
  
   
  public setLastGet(){
    
  }
  //Verifica no array qual foi a ultima informação gerada e mostra no card
  public previousRequest() {
    this.requests.pop();
    console.log(this.requests)
    this.setInfo(this.requests[this.requests.length - 1])  
  }
}
