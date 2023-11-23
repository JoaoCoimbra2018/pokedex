import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  nameFilter = '';
  selectedPkm = null;
  get pokemonList () {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toUpperCase().indexOf(this.nameFilter.toUpperCase()) !== -1;
    })
  } 

  /*
  pokemonList = [
    { name: 'Bulbasaur', number: 1},
    { name: 'Charmander', number: 4},
    { name: 'Squirtle', number: 7},
    { name: 'Pikachu', number: 25}

  ];
  */

  get pkmSprite() {

    const number = ('000' + this.selectedPkm.number).slice(-3);

    return `//serebii.net/sunmoon/pokemon/${number}.png`
  }

  constructor (
    private pokeapi: PokeapiService
  ) {}

  ngOnInit () {}

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
