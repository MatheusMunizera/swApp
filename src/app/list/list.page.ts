import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  private API_URL = "https://swapi.dev/api/people/";
  private url = "https://reqres.in/api/login";
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  public listCharacter(peopleIndex: number){
    return this.http.get("https://swapi.dev/api/people/1")
                    .subscribe(data => {
                      console.log(data);
                    });
  }

  public populate(){
    var ch = [];
    for (let i = 1; i < 83; i++){
       ch.push(this.listCharacter(i));
    }
    return ch;
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.url + '/users/?per_page=10&page=' + page;

      this.http.get(this.url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
