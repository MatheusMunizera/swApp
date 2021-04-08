import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],

})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  segmentCard = ""

  mudarCor() {
    switch (this.segmentCard) {
      case 'Tech':
        document.getElementById('Tech').style.cssText =
          '-webkit-text-stroke-color: #000000';
          '-webkit-text-stroke-color: #ffc500';
        document.getElementById('Prod').style.cssText =
          '-webkit-text-stroke-color: #ffc500';
        document.getElementById('Pol').style.cssText =
          '-webkit-text-stroke-color: #ffc500';
        break;
      case 'Prod':
        document.getElementById('Tech').style.cssText =
          '-webkit-text-stroke-color: #ffc500';
        document.getElementById('Prod').style.cssText =
          '-webkit-text-stroke-color: #000000';
        document.getElementById('Pol').style.cssText =
          '-webkit-text-stroke-color: #ffc500';
          break;
      case 'Pol':
        document.getElementById('Tech').style.cssText =
        '-webkit-text-stroke-color: #ffc500';
      document.getElementById('Prod').style.cssText =
        '-webkit-text-stroke-color: #ffc500';
      document.getElementById('Pol').style.cssText =
        '-webkit-text-stroke-color: #000000';
        break;
    }
  }
}
