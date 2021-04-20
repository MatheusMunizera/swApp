import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/folder/Inbox'},
    { title: 'listas', url: '/list'},
    { title: 'random', url: '/random'},
    { title: 'Quizz', url: '/quizz'},

  ];
  constructor() {}
}
