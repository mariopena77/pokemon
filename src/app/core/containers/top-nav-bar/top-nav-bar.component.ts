import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchTop = new EventEmitter<string>();
  @Output() stateAside = new EventEmitter<string>();

  _state: string = 'open';

  constructor() { }

  ngOnInit() {
  }

  search(data :string) {
    this.searchTop.emit(data);
  }

  close(){
    if(this._state == 'open'){
      this._state = 'close';
      this.stateAside.emit(this._state);
    }else {
      this._state = 'open';
      this.stateAside.emit(this._state);
    }
  }

}
