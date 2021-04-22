import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

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


  constructor(private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
