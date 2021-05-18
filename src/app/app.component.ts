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
    { title: 'Lista de personagens', url: '/list', icon: "list"},
    { title: 'Random', url: '/random', icon:"telescope"},
    { title: 'Quizz', url: '/quizz',  icon: "document-text"},


  ];
  public labels = [
    { title: 'O Projeto', url: 'https://github.com/MatheusMunizera/swApp', icon: "logo-github"},
    { title: 'API', url: 'https://github.com/MatheusMunizera/starwars-api', icon: "logo-github"},
    { title: 'Youtube Entrega 1', url: 'https://youtu.be/bw7zTNt-OF8', icon: "logo-youtube"},
    //{ title: 'Youtube Entrega 2', url: 'https://youtu.be/bw7zTNt-OF8', icon: "logo-youtube"},
    { title: 'Discord', url: 'https://discord.gg/tghrPuD', icon: "logo-discord"},
  ];
  constructor(private storage: Storage ) {}



  async ngOnInit(){
    await this.storage.create();
  }
}
