import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: "home"},
    { title: 'Filmes', url: '/filmes', icon: "film"},
    { title: 'Series', url: '/series', icon: "ticket"},
    { title: 'Lista de personagens', url: '/list', icon: "list"},
    { title: 'Random', url: '/random', icon:"telescope"},
    { title: 'Quizz', url: '/quizz',  icon: "document-text"},


  ];
  public labels = [
    { title: 'O Projeto', url: 'https://github.com/MatheusMunizera/swApp', icon: "logo-github"},
    { title: 'API', url: 'https://github.com/MatheusMunizera/starwars-api', icon: "logo-github"},
    { title: 'Youtube', url: 'https://www.youtube.com/', icon: "logo-youtube"},
    { title: 'Discord', url: 'https://discord.gg/tghrPuD', icon: "logo-discord"},
  ];
  constructor() {}
}
