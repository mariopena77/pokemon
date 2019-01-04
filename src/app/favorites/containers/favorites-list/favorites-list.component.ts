import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  pokemonList: any[] = [];

  constructor(private authFire: AngularFireAuth, private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.favoritesService.listFavorites(user)
            .subscribe(
              list => {
                console.log(list);
                this.pokemonList = list;
              }
            );
        }
      }
    );
  }



}
