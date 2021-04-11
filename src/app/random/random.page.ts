import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
  name : string
  img: string
  resume: string
  cardHide: boolean = true

  constructor(public animationCtrl: AnimationController,public loadingController: LoadingController,private http: HttpClient) {
    this.apiURL = 'https://matheusmunizera.github.io/starwars-api/api';
  }
 

  public ngAfterViewInit() {

   const animation = this.animationCtrl
  .create()
  .addElement(this.initLbl.nativeElement)
  .duration(10000)
  .direction('alternate')
  .keyframes([
    { offset: 0.25, transform: 'scale(0.95)', opacity: '0.25' },
    { offset: 0.5, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.75, transform: 'scale(0.95)', opacity: '0.75' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
    
  ]);
  animation.play();


  
  
  }

  
  public async cardAnimation(){
    this.animationCtrl.create()
    .addElement(this.card.nativeElement)
    .duration(500)
    .easing('ease-out')
    .fromTo('transform', '', 'translateX(138%)')
    // .keyframes([
    //   { offset: 0.25, transform: 'translateX(-10%)' },
    //   { offset: 0.75, transform: 'translateX(145%)' },
    //   { offset: 0.85, transform: 'translateX(135%)' },
    //   { offset: 1, transform: 'translateX(138%)'}
      
    // ])
    .play();
  }

  
  public getCharacter() {
    let randomNumber = Math.floor((Math.random()*88)+1)
    let completeUrl: string = this.apiURL + '/characters/' + randomNumber + '.json';
    return this.getCall(completeUrl);
  }
  public getVehicle(){
    let randomNumber = Math.floor((Math.random()*40)+1)
    let completeUrl: string = this.apiURL + '/vehicles/' + randomNumber + '.json';
    return this.getCall(completeUrl);
  }
  public getSpecie(){
    let randomNumber = Math.floor((Math.random()*37)+1)
    let completeUrl: string = this.apiURL + '/species/' + randomNumber + '.json';
    return this.getCall(completeUrl);
  }
  public getPlanet(){
    let randomNumber = Math.floor((Math.random()*37)+1)
    let completeUrl: string = this.apiURL + '/planets/' + randomNumber + '.json';
    return this.getCall(completeUrl);
  }
  
  private async getCall(url: string){
    console.log(url);
   this.cardAnimation()
  this.cardHide = false
    return this.http.get(url).subscribe(res=> this.setInfo(res))
  }
  
  private  setInfo(res){
    this.name=res.name
    this.img = res.image
    this.resume = res.resume
  }

    



  
}
