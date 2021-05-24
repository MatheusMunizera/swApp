import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Character, Specie, Vehicle, Planet } from '../models/SwTypeItems';

interface Rank {
  id: number;
  username: string;
  score: number;
}
@Injectable({
  providedIn: 'root',
})
export class SwAppService {

  public characterList: Character[] = [] ;
  public vehiclesList: Vehicle[] = [];
  public speciesList: Specie[] = [];
  public planetsList: Planet[] = [];

  private readonly API_URL_CHARACTER =
    'https://matheusmunizera.github.io/starwars-api/api/allCharacters.json';
  private readonly API_URL_VEHICLES =
    'https://matheusmunizera.github.io/starwars-api/api/allVehicles.json';
  private readonly API_URL_PLANETS =
    'https://matheusmunizera.github.io/starwars-api/api/allPlanets.json';
  private readonly API_URL_SPECIES =
    'https://matheusmunizera.github.io/starwars-api/api/allSpecies.json';

  constructor(public http: HttpClient, private storage: Storage) {
    this.loadRanks();
  }

  public status = false;
  async runPop() {
    if (this.status == false) {
      await this.getAllCharacters() ;
      await this.getAllVehicles();
      await this.getAllPlanets();
      await this.getAllSpecies();
    }
    this.status = true;
  }

  async getAllCharacters() {
    this.http.get<any>(this.API_URL_CHARACTER).toPromise()
    .then((data)=> {
        this.characterList = data
    })
  }

  async getAllVehicles()  {
    this.http.get<any>(this.API_URL_VEHICLES).toPromise()
    .then((data)=> {
      this.vehiclesList = data   
    })
  }
  
  async getAllPlanets() {
    this.http.get<any>(this.API_URL_PLANETS).toPromise()
    .then((data)=> {
      this.planetsList = data   
    })
  }
  
  async getAllSpecies() {
    this.http.get<any>(this.API_URL_SPECIES).toPromise()
    .then((data)=> {
      this.speciesList = data   
    })
  }

  // ** RANDOM ** \\

  // Gera um numero aleatório e procura na lista
  public getCharacter() {
    let randomNumber = Math.floor(Math.random() * 88);
    console.log(randomNumber);
    return this.characterList[randomNumber];
  }
  public getVehicle() {
    let randomNumber = Math.floor(Math.random() * 40);
    console.log(randomNumber);
    return this.vehiclesList[randomNumber];
  }
  public getSpecie() {
    let randomNumber = Math.floor(Math.random() * 37);
    console.log(randomNumber);
    return this.speciesList[randomNumber];
  }

  public getPlanet() {
    let randomNumber = Math.floor(Math.random() * 37);
    console.log(randomNumber);
    return this.planetsList[randomNumber];
  }

  // Quizz \\
  public ranks: Rank[] = [];
  public newUser: string;
  public newScore: number;

  public rank = {
    id: 0,
    username: '',
    score: 0,
  };

  public add(score: number) {
    this.ranks.push({
      id: 1 + this.ranks.length,
      username: this.newUser,
      score: score,
    });
    console.log(this.ranks);
    this.storage.set('ranks', this.ranks);
    this.newScore = 0;
  }

  private async loadRanks() {
    const loadedRanks = (await this.storage.get('ranks')) as Rank[];
    if (loadedRanks) {
      this.ranks.push(...loadedRanks);
    }
  }
}
