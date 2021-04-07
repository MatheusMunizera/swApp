import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

interface Character{
  name: string,
  height: string,
  mass: string,
  hair: string,
  skin: string,
  eye: string,
  birth: string,
  gender: string
}

interface CharacterNumber{
  numb: number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  public charater = [ 
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair: 'blond',
      skin: 'fair',
      eye: 'blue',
      birth: '19BBY',
      gender: 'male'
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair: 'n/a',
      skin: 'gold',
      eye: 'yellow',
      birth: '112BBY',
      gender: 'n/a'
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair: 'n/a',
      skin: 'white, blue',
      eye: 'red',
      birth: '33BBY',
      gender: 'n/a'
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair: 'none',
      skin: 'white',
      eye: 'yellow',
      birth: '41.9BBY',
      gender: 'male'
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair: 'brown',
      skin: 'light',
      eye: 'brown',
      birth: '19BBY',
      gender: 'female'
    }
  ]
  public num: CharacterNumber[] = []
  public pers: Variable[] = [];
  public caracter: Character[] = []

  private API_URL = "https://swapi.dev/api/people/";
  constructor(public http: HttpClient) { 
    //this.populate();
  }

  ngOnInit() {
    this.populate();
  }

  public populate(){
    for (let i = 1; i < 84; i++){
      if (i != 17){
        this.http.get(this.API_URL + i)
             .subscribe(data => {
                var con = JSON.stringify(data);
                var content = JSON.parse(con);
                this.caracter.push({
                  name: content.name,
                  height: content.height,
                  mass: content.mass,
                  hair: content.hair_color,
                  skin: content.skin_color,
                  eye: content.eye_color,
                  birth: content.birth_year,
                  gender: content.gender
                });
              });
      }
    }
  }
}