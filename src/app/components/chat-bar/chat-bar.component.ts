import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})


export class ChatBarComponent implements OnInit {

  @Output() submitMessage: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() public User = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public chatMessage = "";
  public id: number = 0;

  public addMessage(message: any): void{

    
    const timestamp: string = new Date().toLocaleString("de", {hour: "numeric", minute: "numeric", second: "numeric"});
    const messages: any = {user: this.User, message: this.chatMessage, time: timestamp};
    

    if(!message.replace(/\s/g, "").length){
      this.chatMessage = ""
      return;
    }

    if(!this.User.replace(/\s/g, "").length){
      alert("Sie müssen angemeldet sein um Nachrichten zu verschicken.")
      return;
    }

    
    
    const headers = { 'content-type': 'application/json'} 

    this.http.post("https://cowardly-sloth-15.loca.lt", JSON.stringify(messages), {'headers':headers}).subscribe(r=>{});
    
    this.submitMessage.emit(messages);
    this.chatMessage = "";
  }
}
