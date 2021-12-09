import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'TEST-SERVER';

 constructor(private http: HttpClient) { }

  public messageHistory: any = [];
  public username = "";
  public colorunique:any = [];
  public colorlist = ["red","blue","yellow","darkblue","brown", "darkmagenta","indianred", "olive"]

  
  ngOnInit(): void {
    const message = interval(1000);
    message.subscribe(() => {this.http.get("http://localhost:3000/").subscribe((r)=>
      {this.messageHistory = r;
      this.messageHistory.map((obj:any) => {obj.nickname == this.username? obj.loggedin = true:obj.loggedin = false})
    })
    })

  }  

  

  public onSubmitUser (user: string): void {
    this.username = user
    //completly random color but they often are to bright or dont look good
    //this.colorunique = '#'+Math.floor(Math.random()*16777215).toString(16) 
    this.colorunique = this.colorlist.pop()
  }
}
