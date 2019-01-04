import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
