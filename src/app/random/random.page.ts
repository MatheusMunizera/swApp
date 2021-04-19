import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimationController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})

export class RandomPage implements OnInit {
  private readonly apiURL: string;
  name: string;
  img: string;
  resume: string;
  showCard: boolean = false;
  private lastGet: string;
  private requests: string[] = [];

  private completeUrl: string;

  constructor(
    public animationCtrl: AnimationController,
    public loadingController: LoadingController,
    private http: HttpClient
  ) {
    // URL DA API
    this.apiURL = 'https://matheusmunizera.github.io/starwars-api/api';
  }

  public ngOnInit() {}

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
      .addElement(document.getElementsByName('people'))
      .duration(100)
      .fromTo('transform', '', 'translateX(500px)');

    await planets.play();
    await species.play();
    await vehicles.play();
    await people.play();
  }
  // *******************************************  \\


  // Completa o URL DA API de acordo com a informação desejada
  public getCharacter() {
    this.lastGet = 'character';
    let randomNumber = Math.floor(Math.random() * 88 + 1);
    this.completeUrl = this.apiURL + '/characters/' + randomNumber + '.json';

    return this.loadCard(this.completeUrl);
  }
  public getVehicle() {
    this.lastGet = 'vehicle';
    let randomNumber = Math.floor(Math.random() * 40 + 1);
    this.completeUrl = this.apiURL + '/vehicles/' + randomNumber + '.json';
    return this.loadCard(this.completeUrl);
  }
  public getSpecie() {
    this.lastGet = 'specie';
    let randomNumber = Math.floor(Math.random() * 37 + 1);
    this.completeUrl = this.apiURL + '/species/' + randomNumber + '.json';
    return this.loadCard(this.completeUrl);
  }
  public getPlanet() {
    this.lastGet = 'planet';
    let randomNumber = Math.floor(Math.random() * 37 + 1);
    this.completeUrl = this.apiURL + '/planets/' + randomNumber + '.json';
    return this.loadCard(this.completeUrl);
  }

  // Recebe a URL Completa e faz a requisição
  private getCall(url: string) {
    return new Promise((res) => {
      this.http.get(url).subscribe((data) => res(this.setInfo(data)));
    });
  }

  // Set as informações necessárias
  private async setInfo(res) {
    this.name = res.name;
    this.img = res.image;
    this.resume = res.resume;
  }

  // Loading async carregndo as informações e animações
  private async loadCard(url) {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: '<img src="/assets/gif/loading.gif">',
      spinner: null,
    });

    await loading.present();
    await this.rollOut();
    this.requests.push(url);
    await this.getCall(url);
    await this.cardBounceIn();
    await loading.dismiss();
  }


  //Faz um nova requisição de acordo com o ultimo tipo selecionado
  public nextRequest() {
    switch (this.lastGet) {
      case 'character':
        this.getCharacter();
        break;
      case 'vehicle':
        this.getVehicle();
        break;
      case 'specie':
        this.getSpecie();
        break;
      case 'planet':
        this.getPlanet();
        break;
    }
  }

  //Verifica no array qual foi a ultima informação gerada e mostra no card
  public previousRequest() {
    this.requests.pop();
    let url = this.requests[this.requests.length - 1];
    this.getCall(url);
  }
}
