import { Component, OnInit, Input } from '@angular/core';
import { books } from "../../../books";
import { MessagesService } from "src/app/alerts/services/messages.service";
import { IMessage } from "src/app/alerts/models/interfaces/message";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  constructor(private msgService: MessagesService) { }

  ngOnInit() {    
    window.addEventListener('online', this.updateConnection.bind(this));
    window.addEventListener('offline', this.updateConnection.bind(this));
  }

  updateConnection(event) {
    let msg: IMessage;

    if(event.type == 'online') {
      msg = {msg: 'Se ha establecido conexión de red', type: 'success'};
    }else if(event.type == 'offline') {
      msg = {msg: 'Se ha perdido la conexión de red', type: 'error'};
    }

    this.msgService.message(msg);
  }


  
}
