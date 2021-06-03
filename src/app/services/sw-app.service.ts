import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Character, Specie, Vehicle, Planet, Films, Series } from '../models/SwTypeItems';
import { BehaviorSubject, Observable } from 'rxjs';

interface Rank {
  id: number;
  username: string;
  score: number;
}
@Injectable({
  providedIn: 'root',
})

export class SwAppService {
  public charactersList: Character[] = [];
  public vehiclesList: Vehicle[] = [];
  public speciesList: Specie[] = [];
  public planetsList: Planet[] = [];
  public filmsList: Films[] = [];
  public seriesList: Series[] = [];

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
  private readonly API_URL_SERIES =
    'https://matheusmunizera.github.io/starwars-api/api/allSeries.json';

  constructor(public http: HttpClient, private storage: Storage) {
    this.loadRanks();
  }

  private status = false;
  async requestAll() {
    if (this.status == false) {
      await this.getAllCharacters();
      await this.getAllVehicles();
      await this.getAllPlanets();
      await this.getAllSpecies();
      await this.getAllFilms();
      await this.getAllSeries();
    }
    this.status = true;
  }

  async getAllCharacters() {
    this.http
      .get<Character[]>(this.API_URL_CHARACTER)
      .toPromise()
      .then((data) => {
        this.charactersList = data;
      });
  }

  async getAllVehicles() {
    this.http
      .get<Vehicle[]>(this.API_URL_VEHICLES)
      .toPromise()
      .then((data) => {
        this.vehiclesList = data;
        return this.vehiclesList;
      });
  }

  async getAllPlanets() {
    this.http
      .get<Planet[]>(this.API_URL_PLANETS)
      .toPromise()
      .then((data) => {
        this.planetsList = data;
      });
  }

  async getAllSpecies() {
    this.http
      .get<Specie[]>(this.API_URL_SPECIES)
      .toPromise()
      .then((data) => {
        this.speciesList = data;
      });
  }

  async getAllFilms() {
    this.http
      .get<Films[]>(this.API_URL_FILMS)
      .toPromise()
      .then((data) => {
        this.filmsList = data;
      });
  }

  async getAllSeries(){
    this.http
      .get<Series[]>(this.API_URL_SERIES)
      .toPromise()
      .then((data)=>{
        this.seriesList = data
      });
  }

  // ********    R A N D O M   *********** \\

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

 // ********    Q U I Z Z     *********** \\

  public ranks: Rank[] = [];
  private rankSubject: BehaviorSubject<Rank[]> = new BehaviorSubject([]);
  public rankStream = this.rankSubject.asObservable();

  public atualRank: Rank = 
  {
    id: 0,
    username: '',
    score: 0,
  };

  public async addToStorage(rank: Rank) {
    this.ranks.push({
      id: 1 + this.ranks.length,
      username: rank.username,
      score: rank.score,
    });
    this.saveAtStorage();
  }

  private saveAtStorage() {
    this.storage.set('ranks', this.ranks);
    this.rankSubject.next([...this.ranks]);
    console.log(this.ranks);
  }
  
  private async loadRanks() {
    const storedRank = (await this.storage.get('ranks')) as Rank[];
    if (storedRank) {
      this.ranks.push(...storedRank);
      this.rankSubject.next([...this.ranks]);
    }
  }

}
