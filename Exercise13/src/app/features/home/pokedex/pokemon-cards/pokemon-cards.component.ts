import {Component, inject, signal} from '@angular/core';
import {PokemonService} from '../../../../shared/services/pokemon/pokemon.service';
import {ApiResponse, Pokemon, ResourceList} from '../../../../shared/models/pokemon/pokemon.model';
import {HttpClient, httpResource} from '@angular/common/http';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-pokemon-cards',
  imports: [
    JsonPipe
  ],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.css'
})
export class PokemonCardsComponent {
  #pokemonService = inject(PokemonService);
  pokemonLists = signal<ResourceList[]>([]);
  pokemonDetails = signal<Pokemon[]>([]);
  limit = signal<number>(20);
  offset = signal<number>(0);
  id = signal<number>(1);
  name = signal<string>("");

  pokemonResource = httpResource<ApiResponse<ResourceList>>(
    () => `https://pokeapi.co/api/v2/pokemon/${this.name()}`
  )

  loadPokemonList(limit: number, offset: number) {
    this.#pokemonService.getPokemonByOffsetLimit(limit, offset).subscribe(pokemon => {
      this.pokemonLists.set(pokemon.results)
      this.loadPokemonDetailsFromList(pokemon.results);
    })
  }

  ngOnInit() {
    this.loadPokemonList(20,0);
  }

  loadPokemonDetailsFromList(list: ResourceList[]) {
    list.forEach(items => {
      this.#pokemonService.getPokemonByName(items.name).subscribe(pokemon => {
        this.pokemonDetails.set(this.pokemonDetails().concat(pokemon));//concat use for extend arrays
      });
    });
  }

  getTypeNames(pokemon: Pokemon): string {
    return pokemon.types.map(t => t.type.name).join(', ');
  }


}
