import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimationController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements AfterViewInit {
  @ViewChild('initLbl', { read: ElementRef }) initLbl: ElementRef;
  @ViewChild('card', { read: ElementRef }) card: ElementRef;

  readonly apiURL: string;
  name: string;
  img: string;
  resume: string;
  cardHide: boolean = true;

  constructor(
    public animationCtrl: AnimationController,
    public loadingController: LoadingController,
    private http: HttpClient
  ) {
    this.apiURL = 'https://matheusmunizera.github.io/starwars-api/api';
  }

  public ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.initLbl.nativeElement)
      .duration(5000)
      .direction('alternate')
      .iterations(Infinity)
      .keyframes([
        { offset: 0.25, transform: 'scale(0.95)', opacity: '0.25' },
        { offset: 0.5, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.75, transform: 'scale(0.95)', opacity: '0.75' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);      
    animation.play();


  }

 private async cardAnimationIn () {
    this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(300)
      .easing('ease-out')
      .keyframes([
        { offset: 0, transform: 'scale(0)' },
        { offset: 0.7, transform: 'scale(1.2)'},
        { offset: 1, transform: 'scale(1)', },
      ])
      .play();    
  }
  
  public getCharacter() {
    let randomNumber = Math.floor(Math.random() * 88 + 1);
    let completeUrl: string =
      this.apiURL + '/characters/' + randomNumber + '.json';
    return this.presentLoading(completeUrl);
  }
  public getVehicle() {
    let randomNumber = Math.floor(Math.random() * 40 + 1);
    let completeUrl: string =
      this.apiURL + '/vehicles/' + randomNumber + '.json';
    return this.presentLoading(completeUrl);
  }
  public getSpecie() {
    let randomNumber = Math.floor(Math.random() * 37 + 1);
    let completeUrl: string =
      this.apiURL + '/species/' + randomNumber + '.json';
    return this.presentLoading(completeUrl);
  }
  public getPlanet() {
    let randomNumber = Math.floor(Math.random() * 37 + 1);
    let completeUrl: string =
      this.apiURL + '/planets/' + randomNumber + '.json';
    return this.presentLoading(completeUrl);
  }

  private getCall(url: string) {
    console.log(`Fazendo requisição para: ${url}`);
    this.cardHide = false;
    return new Promise(res => {
      this.http.get(url).subscribe(data => res(this.setInfo(data)))
    })
  }

  private async setInfo(res) {
    
    this.name = res.name;
    this.img = res.image;
    this.resume = res.resume;
   
  }

  
  private async presentLoading(url) {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: '<img src="/assets/gif/loading.gif">',
      spinner: null     
    });
    await loading.present();
    await this.getCall(url);
    await this.cardAnimationIn();
    await loading.dismiss();    
  }

// Função que leva a pagina de informação sobre o personagem do card
  public nav(){
    console.log('Redirecionando para pagina info')
  }
  


   
  
}
