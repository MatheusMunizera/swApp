import { Component, OnInit } from '@angular/core';
import { SwAppService } from 'src/app/services/sw-app.service';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private swService: SwAppService
  ) {}

  ngOnInit() {}

  private searchStream = new BehaviorSubject('');

  public rankStream = combineLatest([
    this.swService.rankStream,
    this.searchStream,
  ]).pipe(
    map(([ranking, search]) =>
      ranking.filter((rank) => rank.username.includes(search))
    ),
    map((ranks) =>
      [...ranks]
        .sort((a, b) => a.username.localeCompare(b.username))
        .sort((a, b) => b.score - a.score)
    )
  );

  public updateSearchStream(event: CustomEvent) {
    this.searchStream.next(event.detail.value);
  }

  public goQuizz() {
    this.navCtrl.back();
  }
  
}
