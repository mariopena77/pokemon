import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'src/app/alerts/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, private alertService: MessagesService) {
    authFire.authState.subscribe(
      user => {
        if (user) {
          this.user = user;
          this.favsRef = rdb.list(`favorites/${this.user.uid}`);
        }
      }
    );
  }

  listFavorites(user: firebase.User): Observable<any[]> {
    this.favsRef = this.rdb.list(`favorites/${user.uid}`);
    return this.favsRef.valueChanges();
  }
}
