import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox'},
    { title: 'Outbox', url: '/folder/Outbox'},
    { title: 'Favorites', url: '/folder/Favorites'},
    { title: 'Archived', url: '/folder/Archived'},
    { title: 'Trash', url: '/folder/Trash'},
    { title: 'Filmes', url: '/folder/Spam'},
    { title: 'Series', url: '/folder/Spam'},
  ];
  constructor() {}
}
