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
  public colorlist = ["orangered","royalblue","darkblue","brown", "darkmagenta","indianred", "olive", "tomato", "tan", "wheat", "moccasin", "fuchsia"]

  
  ngOnInit(): void {
    const message = interval(1000);
    message.subscribe(() => {this.http.get("https://myserver.loca.lt").subscribe((r)=>
      {this.messageHistory = r;
      this.messageHistory.map((obj:any) => {obj.nickname == this.username? obj.loggedin = true:obj.loggedin = false})
    })
    })

  }  

  public getRandomIntInclusive(min:any, max:any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  public onSubmitUser (user: string): void {
    this.username = user
    this.colorunique = this.colorlist[this.getRandomIntInclusive(0,11)]
  }
}
