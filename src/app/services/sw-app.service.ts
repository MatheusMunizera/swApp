import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Character, Specie, Vehicle, Planet, Films, Series } from '../models/SwTypeItems';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

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

  private API_URL_CHARACTER =
    'https://swapi.matheusmuniz.dev/characters.json';
  private API_URL_VEHICLES =
    'https://swapi.matheusmuniz.dev/vehicles.json';
  private API_URL_PLANETS =
    'https://swapi.matheusmuniz.dev/planets.json';
  private API_URL_SPECIES =
    'https://swapi.matheusmuniz.dev/species.json';
  private API_URL_FILMS =
    'https://swapi.matheusmuniz.dev/filmsaaa.json';
  private API_URL_SERIES =
    'https://swapi.matheusmuniz.dev/series.json';

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
      .then((res) => {
        console.log(res)
        this.charactersList = res;
      })
      .catch(() => {
        this.API_URL_SERIES = 'https://swapi-k1dhnj6wu-matheusmunizera.vercel.app/characters.json';
        this.getAllCharacters();
      })
      
  }

  async getAllVehicles() {
    this.http
      .get<Vehicle[]>(this.API_URL_VEHICLES)
      .toPromise()
      .then((res) => {
        this.vehiclesList = res;
        return this.vehiclesList;
      }).catch(()=>{
        this.API_URL_SERIES = 'https://swapi-k1dhnj6wu-matheusmunizera.vercel.app/vehicles.json';
        this.getAllVehicles();
      })
  }

  async getAllPlanets() {
    this.http
      .get<Planet[]>(this.API_URL_PLANETS)
      .toPromise()
      .then((res) => {
        this.planetsList = res;
      }).catch(()=>{
        this.API_URL_PLANETS = 'https://swapi-k1dhnj6wu-matheusmunizera.vercel.app/planets.json';
        this.getAllPlanets();
      })
  }

  async getAllSpecies() {
    this.http
      .get<Specie[]>(this.API_URL_SPECIES)
      .toPromise()
      .then((res) => {
        this.speciesList = res;
      }).catch(()=>{
        this.API_URL_SPECIES = 'https://swapi-k1dhnj6wu-matheusmunizera.vercel.app/species.json';
        this.getAllFilms();
      })
  }

  async getAllFilms() {
    this.http
      .get<Films[]>(this.API_URL_FILMS)
      .toPromise()
      .then((res) => {
        this.filmsList = res;
      }).catch(()=>{
        this.API_URL_FILMS = 'https://swapi-k1dhnj6wu-matheusmunizera.vercel.app/films.json';
        this.getAllFilms();
      })
  }

  async getAllSeries(){
    this.http
      .get<Series[]>(this.API_URL_SERIES)
      .toPromise()
      .then((res)=>{
        this.seriesList = res;
      }).catch(()=>{
        this.API_URL_SERIES = 'https://swapi-k1dhnj6wu-matheusmunizera.vercel.app/series.json';
        this.getAllSeries();
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
