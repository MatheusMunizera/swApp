import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwAppService } from '../services/sw-app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],

})
export class InfoPage implements OnInit {
   readonly apiUrl = "https://matheusmunizera.github.io/starwars-api/api/"
   segmentCard = ""

  constructor(private route: ActivatedRoute, private  http: HttpClient ) {
    const user = route.snapshot.paramMap.get('id');

    this.loadInfo(user)
   }

  ngOnInit() { }

 

   private loadInfo (item: String) {
    

   }
  
}
