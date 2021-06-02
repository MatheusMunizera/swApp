import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { SwAppService } from '../services/sw-app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;

  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
    spaceBetween:20,
  };

  public slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 1.3,
    spaceBetween:20,
  };

  public slideOpts3 = {
    initialSlide: 0,
    slidesPerView: 2.3,
    spaceBetween:40,
  };


  constructor(private activatedRoute: ActivatedRoute,private swService: SwAppService) { 
  
  
  }

  async ngAfterViewInit(){
    await this.swService.requestAll();
  }


  
  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

 async openPage(){
  await Browser.open({toolbarColor: "#000000", url: 'https://github.com/matheusmunizera/'})
  }

}
