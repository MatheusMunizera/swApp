export interface Character {
    id: number;
    name: string;
    height: number;
    mass: number;
    gender: string;
    homeworld: string;
    wiki: string;
    image: string;
    born: number;
    bornLocation: string;
    died: number;
    diedLocation: string;
    species: string;
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    cybernetics: string;
    affiliations: string[];
    masters: string[];
    apprentices: string[];
    formerAffiliations: string;
    resume: string;
  }
  export interface Specie {
    id:               number;
    name:             string;
    classification:   string;
    resume:           string;
    image:            string;
    designation:      string;
    average_height:   string;
    skin_colors:      string;
    hair_colors:      string;
    eye_colors:       string;
    average_lifespan: string;
    language:         string;
    people:           string[];
    films:            string[];
    created:          Date;
    edited:           Date;
  }
  
  export interface Vehicle {
    id: number;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    films: string[];
    created: Date;
    image: string;
    resume: string;
    pilots:  string[];
  }

  export interface Planet {
    id:              number;
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       string[];
    films:           string[];
    created:         Date;
    edited:          Date;
    image:           string;
    resume:          string;
  }
 
  