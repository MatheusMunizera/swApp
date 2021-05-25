import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-header',
  templateUrl: './sw-header.component.html',
  styleUrls: ['./sw-header.component.scss'],
})
export class SwHeaderComponent implements OnInit {

  @Input() namePage
  @Input() type

  constructor() { }
  ngOnInit() {
   
  }


}
