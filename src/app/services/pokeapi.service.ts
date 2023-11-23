import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = '//dev.treinaweb.com.br/pokeapi/';

  pokeList = [];

  /* 
  pokeList = [
    { name: 'Bulbasaur', number: 1},
    { name: 'Charmander', number: 4},
    { name: 'Squirtle', number: 7},
    { name: 'Pikachu', number: 25}
  ]
 */
  constructor(
    private http: HttpClient
  ) { }

  listAll(){
    this.http.get(`${this.url}/pokedex/1`)
      .subscribe(
        response => {
          console.log(response)
        }
      )
  }
}
