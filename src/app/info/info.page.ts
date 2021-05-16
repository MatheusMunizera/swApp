import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwAppService } from '../services/sw-app.service';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],

})
export class InfoPage implements OnInit {
   readonly apiUrl = "https://matheusmunizera.github.io/starwars-api/api/"
   segmentCard = ""
   current: Variable;

  constructor(private route: ActivatedRoute, private  http: HttpClient, private swService: SwAppService ) {
    const user = route.snapshot.paramMap.get('id');
    swService.loadInfo(this.apiUrl + user + ".json").then(data => {
      this.current = JSON.parse(JSON.stringify(data));
      console.log(this.current);
    });
  }

  ngOnInit() { }
}
