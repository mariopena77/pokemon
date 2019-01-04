import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { books } from '../../../books';
import { IPokeList } from '../../models/interfaces/poke-list';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  completePokeList: IPokeList;
  pokeList: IPokeList;
  page1: number;
  page2: number;
  page3: number;
  currentPage: number;

  constructor(private pokeService: PokemonsService) { }

  ngOnInit() {
    this.pokeService.list()
    .subscribe(
      list => {
        this.completePokeList = list;
        this.setPage(1);
      }
    );
  }

  addFavorite(book) {
    this.pokeService.addFavorite(book);
  }

  setPage(page: number) {
    const totalPages = Math.ceil(this.completePokeList.count / 16);
    let index: number;

    this.currentPage = page;
    if (page === 0) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    this.currentPage = page;
    index = (page - 1) * 16;

    this.pokeList = { count: 0, next: '', previous: '', results: [] };
    this.pokeList.results = this.completePokeList.results.slice(index, index + 16);

    if (page === 1) {
      this.page1 = 1;
      this.page2 = page + 1;
      this.page3 = page + 2;
    } else {
      this.page1 = page - 1;
      this.page2 = page;
      this.page3 = page + 1;
    }
  }


}
