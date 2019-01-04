import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  _pokeResult: {name: string, url: string};
  _poke: any;

  @Input()
  get poke(): {name: string, url: string} {
    return this._pokeResult;
  }

  set poke(result: {name: string, url: string}) {
    this.pokeService.getPokemonByUrl(result.url)
    .subscribe(
      pokemon => {
        this._poke = pokemon;
      }
    );
  }

  constructor(private pokeService: PokemonsService) { }

  ngOnInit() {
  }

  addFavorite(book: any) {
    this.pokeService.addFavorite(book);
  }


}
