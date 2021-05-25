import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Character, Specie, Vehicle, Planet, Films } from '../models/SwTypeItems';

interface Rank {
  id: number;
  username: string;
  score: number;
}
@Injectable({
  providedIn: 'root',
})
export class SwAppService {

  public charactersList: Character[] = [] ;
  public vehiclesList: Vehicle[] = [];
  public speciesList: Specie[] = [];
  public planetsList: Planet[] = [];
  public filmsList: Films[] = [];

  private readonly API_URL_CHARACTER =
    'https://matheusmunizera.github.io/starwars-api/api/allCharacters.json';
  private readonly API_URL_VEHICLES =
    'https://matheusmunizera.github.io/starwars-api/api/allVehicles.json';
  private readonly API_URL_PLANETS =
    'https://matheusmunizera.github.io/starwars-api/api/allPlanets.json';
  private readonly API_URL_SPECIES =
    'https://matheusmunizera.github.io/starwars-api/api/allSpecies.json';
  private readonly API_URL_FILMS =
    'https://matheusmunizera.github.io/starwars-api/api/allFilms.json';

  constructor(public http: HttpClient, private storage: Storage) {
    this.loadRanks();
  }

  private status = false;
  async requestAll() {
    if (this.status == false) {
      await this.getAllCharacters() ;
      await this.getAllVehicles();
      await this.getAllPlanets();
      await this.getAllSpecies();
      await this.getAllFilms();
      
    }
    this.status = true;
  }

  async getAllCharacters() {
    this.http.get<Character[]>(this.API_URL_CHARACTER).toPromise()
    .then((data)=> {
        this.charactersList = data
        
    })
  }

  async getAllVehicles()  {
    this.http.get<Vehicle[]>(this.API_URL_VEHICLES).toPromise()
    .then((data)=> {
      this.vehiclesList = data 
      return this.vehiclesList
    })
    
  }
  
  async getAllPlanets() {
    this.http.get<Planet[]>(this.API_URL_PLANETS).toPromise()
    .then((data)=> {
      this.planetsList = data   
    })
  }
  
  async getAllSpecies() {
    this.http.get<Specie[]>(this.API_URL_SPECIES).toPromise()
    .then((data)=> {
      this.speciesList = data   
    })
  }

  async getAllFilms(){
    this.http.get<Films[]>(this.API_URL_FILMS).toPromise()
    .then((data)=>{
      this.filmsList = data
    })
    
  }
  // ** RANDOM ** \\

  // Gera um numero aleatório e procura na lista
  public getRandomCharacter() {
    let randomNumber = Math.floor(Math.random() * 88);
    return this.charactersList[randomNumber];
  }
  public getRandomVehicle() {
    let randomNumber = Math.floor(Math.random() * 40);
    return this.vehiclesList[randomNumber];
  }
  public getRandomSpecie() {
    let randomNumber = Math.floor(Math.random() * 37);
    return this.speciesList[randomNumber];
  }

  public getRandomPlanet() {
    let randomNumber = Math.floor(Math.random() * 37);
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
