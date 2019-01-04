import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService) { }

  canActivate() : Observable<boolean> {
    let authState = this.authService.isLoggedIn();
    console.log(authState);
    if(!authState && !localStorage.getItem('bzgPokeAppTwo')){
      this.authService.logout();
      return of(false);
    }else {
      return of(true);
    }
  }
}
