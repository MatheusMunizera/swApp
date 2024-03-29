import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Home', url: '/home', icon: "home"},
    { title: 'Filmes', url: '/filmes', icon: "film"},
    { title: 'Series', url: '/series', icon: "ticket"},
    { title: 'DataBank', url: '/list', icon: "list"},
    { title: 'Random', url: '/random', icon:"dice"},
    { title: 'Quizz', url: '/quizz',  icon: "document-text"},


  ];
  public labels = [
    { title: 'O Projeto', url: 'https://swapi.matheusmuniz.dev', icon: "document-text-outline"},
    { title: 'API', url: 'https://github.com/MatheusMunizera/swapi', icon: "logo-github"},
    { title: 'Youtube', url: 'https://youtu.be/bw7zTNt-OF8', icon: "logo-youtube"},
    { title: 'Discord', url: 'https://discord.gg/tghrPuD', icon: "logo-discord"},
  ];
  constructor(private storage: Storage ) {}



  async ngOnInit(){
    await this.storage.create();
  }
}
