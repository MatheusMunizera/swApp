export interface Films {
  name:         string;
  id:            number;
  image:         string;
  trailer:       string;
  resume:        string;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  Date;
  characters:    string[];
  planets:       string[];
  vehicles:      string[];
  species:       string[];
}

export interface Series {
  id:           number;
  name:         string;
  release_date: Date;
  image:        string;
  trailer:      string;
  resume:       string;
  director:     string;
  producer:     string;
}

export interface Character {
  id:           number;
  name:         string;
  height:       number;
  mass:         number;
  gender:       string;
  homeworld:    string;
  wiki:         string;
  image:        string;
  born:         number;
  bornLocation: string;
  died:         number;
  diedLocation: string;
  species:      string;
  hairColor:    string;
  eyeColor:     string;
  skinColor:    string;
  cybernetics:  string;
  affiliations: string[];
  masters:      string[];
  apprentices:  string[];
  resume:       string;
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
    id:                     number;
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    films:                  string[];
    created:                Date;
    image:                  string;
    resume:                 string;
    hyperdrive_rating:      null;
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
 
  