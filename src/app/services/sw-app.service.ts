import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Character{
  name: string,
  height: number,
  mass: number,
  gender: string,
  homeworld: string,
  wiki: string,
  image: string,
  born: number,
  bornlocation: string,
  died: number,
  diedlocation: string,
  species: string,
  hairColor: string,
  eyeColor: string,
  skinColor: string,
  cybernetics: string,
  affiliations: string[],
  masters: string[],
  apprentices: string[],
  formerAffiliations: string[],
  resume: string
}

export interface Vehicle{
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: string,
  lenght: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  vehicle_class: string,
  films: string[],
  created: string,
  image: string,
  resume: string,
  pilots: string[]
}

export interface Planet{
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: string[],
  films: string[],
  created: string,
  edited: string,
  image: string,
  resume: string  
}

export interface Specie{
  name: string,
  classification: string,
  resume: string,
  image: string,
  designation: string,
  average_height: string,
  skin_color: string,
  hair_color: string,
  eye_color: string,
  average_lifespan: string,
  language: string,
  people: string[],
  films: string[],
  created: string,
  edited: string
}

export interface CharacterNumber{
  numb: number
}
@Injectable({
  providedIn: 'root'
})
export class SwAppService {

  
 public characterList = []
 public vehiclesList = []
 public speciesList = []
 public planetsList = []
  public caracter: Character[] = []
  public vehicle: Vehicle[] = []
  public planet: Planet[] = []
  public specie: Specie[] = []
  public selectedCaracter: Character
  public selectedVehicle: Vehicle
  public selectedPlanet: Planet
  public selectedSpecie: Specie
 public currentFilter: 'characteres' | 'vehicless' | 'planetss' | 'speciess' = 'characteres';
  public currentSearch = '';
  public currentItem = [];

  //private API_URL = "https://matheusmunizera.github.io/starwars-api/api/characters/";
  private API_URL_CHARACTER = "https://matheusmunizera.github.io/starwars-api/api/allCharacters.json";
  private API_URL_VEHICLES = "https://matheusmunizera.github.io/starwars-api/api/allVehicles.json";
  private API_URL_PLANETS = "https://matheusmunizera.github.io/starwars-api/api/allPlanets.json";
  private API_URL_SPECIES = "https://matheusmunizera.github.io/starwars-api/api/allSpecies.json";
  constructor(public http: HttpClient) {} 




  async runPop(){        
    await this.createCharacterList();
    await this.createVehicleList();
    await this.createPlanetList();
    await this.createSpeciesList();    
  }

  async createCharacterList(){
    await this.populateCaracter().then(data => {     
      var cha = JSON.parse(JSON.stringify(data));          
      for(let i = 0; i < cha.length; i++){
        this.populateCharacterList(cha[i]);  
      }          
    });
  }
  

  async createVehicleList(){
    await this.populateVehicle().then(data => {     
      var cha = JSON.parse(JSON.stringify(data));          
      for(let i = 0; i < cha.length; i++){
        this.populateVehicleList(cha[i]);  
      }   
      }          
    );
  }

  async createPlanetList(){
    await this.populatePlanets().then(data => {     
      var cha = JSON.parse(JSON.stringify(data));          
      for(let i = 0; i < cha.length; i++){
        this.populatePlanetsList(cha[i]);  
      }   
      }          
    );
  }

  async createSpeciesList(){
    await this.populateSpecies().then(data => {     
      var cha = JSON.parse(JSON.stringify(data));          
      for(let i = 0; i < cha.length; i++){
        this.populateSpeciesList(cha[i]);  
      }   
      }          
    );
  }

  populateCharacterList(json){       
    this.characterList.push({
      name: json.name,
      height: json.height,
      mass: json.mass,
      gender: json.gender,
      homeworld: json.homeworld,
      wiki: json.wiki,
      image: json.image,
      born: json.born,
      bornlocation: json.bornlocation,
      died: json.died,
      diedlocation: json.diedlocation,
      species: json.species,
      hairColor: json.hairColor,
      eyeColor: json.eyeColor,
      skinColor: json.skinColor,
      cybernetics: json.cybernetics,
      affiliations: json.affiliations,
      masters: json.masters,
      apprentices: json.apprentices,
      formerAffiliations: json.formerAffiliations,
      resume: json.resume
    });
  }

  populateVehicleList(json){        
    this.vehiclesList.push({
      name: json.name,
      model: json.model,
      manufacturer: json.manufacturer,
      cost_in_credits: json.cost_in_credits,
      lenght: json.lenght,
      max_atmosphering_speed: json.max_atmosphering_speed,
      crew: json.crew,
      passengers: json.passengers,
      cargo_capacity: json.cargo_capacity,
      consumables: json.consumables,
      vehicle_class: json.vehicle_class,
      films: json.films,
      created: json.created,
      image: json.image,
      resume: json.resume,
      pilots: json.pilots
    });
  }

  populatePlanetsList(json){        
    this.planetsList.push({
      name: json.name,
      rotation_period: json.rotation_period,
      orbital_period: json.orbital_period,
      diameter: json.diameter,
      climate: json.climate,
      gravity: json.gravity,
      terrain: json.terrain,
      surface_water: json.surface_water,
      population: json.population,
      residents: json.residents,
      films: json.films,
      created: json.hairColor,
      edited: json.eyeColor,
      image: json.skinColor,
      resume: json.cybernetics
    });
  }

  populateSpeciesList(json){        
    this.speciesList.push({
      name: json.name,
      classification: json.classification,
      resume: json.resume,
      image: json.image,
      designation: json.designation,
      average_height: json.average_height,
      skin_color: json.skin_color,
      hair_color: json.hair_color,
      eye_color: json.eye_color,
      average_lifespan: json.average_lifespan,
      language: json.language,
      people: json.people,
      films: json.films,
      created: json.created,
      edited: json.edited
    });
  }

  async populateCaracter(){
    return new Promise(resolve => {
      this.http.get(this.API_URL_CHARACTER)// + num + ".json")
               .subscribe(data => {                 
                resolve(JSON.parse(JSON.stringify(data)));                 
               });
    });        
  }

  async populateVehicle(){
    return new Promise(resolve => {
      this.http.get(this.API_URL_VEHICLES)// + num + ".json")
               .subscribe(data => {                 
                resolve(JSON.parse(JSON.stringify(data)));                 
               });
    });        
  }

  async populatePlanets(){
    return new Promise(resolve => {
      this.http.get(this.API_URL_PLANETS)// + num + ".json")
               .subscribe(data => {                 
                resolve(JSON.parse(JSON.stringify(data)));                 
               });
    });        
  }

  async populateSpecies(){
    return new Promise(resolve => {
      this.http.get(this.API_URL_SPECIES)// + num + ".json")
               .subscribe(data => {                 
                resolve(JSON.parse(JSON.stringify(data)));                 
               });
    });        
  }

  

  






  

 
}


