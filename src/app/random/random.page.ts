import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Animation,
  AnimationController,
  LoadingController,
} from '@ionic/angular';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  @ViewChild('people', { read: ElementRef }) people: ElementRef;
  @ViewChild('planets', { read: ElementRef }) planets: ElementRef;
  @ViewChild('vehicles', { read: ElementRef }) vehicles: ElementRef;
  @ViewChild('species', { read: ElementRef }) species: ElementRef;
  @ViewChild('img', { read: ElementRef }) img: ElementRef;

  constructor(
    public animationCtrl: AnimationController,
    public loadingController: LoadingController
  ) {}

  btnImgHidden = true;

  ngOnInit() {}

  animationOut() {
    const people = this.animationCtrl
      .create()
      .addElement(this.people.nativeElement)
      .fromTo('transform', '', 'translateY(335px)translateX(140px)');
    const planets = this.animationCtrl
      .create()
      .addElement(this.planets.nativeElement)
      .fromTo('transform', '', 'translateY(-340px)translateX(140px)');
    const vehicles = this.animationCtrl
      .create()
      .addElement(this.vehicles.nativeElement)
      .fromTo('transform', '', 'translateY(-340px)translateX(-140px)');
    const species = this.animationCtrl
      .create()
      .addElement(this.species.nativeElement)
      .fromTo('transform', '', 'translateY(340px)translateX(-140px)');
    this.animationCtrl
      .create()
      .duration(500)
      .iterations(1)
      .easing('ease-in-out')
      .addAnimation([people, planets, vehicles, species])
      .play();
  }

  showImgButtons() {
    console.log('foi clicado no botão Random');
    this.animationOut();
    this.btnImgHidden = false;
  }

  animationIn() {
    const people = this.animationCtrl
      .create()
      .addElement(this.people.nativeElement)
      .fromTo('transform', '', 'translateY(335px)translateX(250px)');
    const planets = this.animationCtrl
      .create()
      .addElement(this.planets.nativeElement)
      .fromTo('transform', '', 'translateY(-340px)translateX(250px)');
    const vehicles = this.animationCtrl
      .create()
      .addElement(this.vehicles.nativeElement)
      .fromTo('transform', '', 'translateY(-340px)translateX(-250px)');
    const species = this.animationCtrl
      .create()
      .addElement(this.species.nativeElement)
      .fromTo('transform', '', 'translateY(340px)translateX(-250px)');
    this.animationCtrl
      .create()
      .duration(500)
      .iterations(1)
      .easing('ease-in-out')
      .addAnimation([people, planets, vehicles, species])
      .play();
  }
  // Tentar customizar o loading
  async presentLoading(img) {
    const loading = await this.loadingController.create({
      message: `Gerando ${img} aleatório`,
      duration: 2000,
    });
    await loading.present();
  }

  onClickImg(img) {
    console.log(`foi clicado na imagem ${img} `);
    this.animationIn();
    this.presentLoading(img);
  }
}
