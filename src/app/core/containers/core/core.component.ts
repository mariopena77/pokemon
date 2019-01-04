import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger,state,style,transition,animate } from "@angular/animations";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '50px',
      })),
      state('open', style({
        width: '100%'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class CoreComponent implements OnInit {

  dataBook: string;
  state: string;

  constructor() { }  

  ngOnInit() {
  }

  searchBook(data: string){
    this.dataBook = data;
  }

  eventAside(data: string) {
    this.state = data;
  }

}
