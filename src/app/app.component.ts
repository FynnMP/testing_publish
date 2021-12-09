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
  

  
  ngOnInit(): void {
    const message = interval(100);
    message.subscribe(() => {this.http.get("https://cowardly-sloth-15.loca.lt").subscribe((r)=>
      {this.messageHistory = r;
      this.messageHistory.map((obj:any) => {obj.nickname == this.username? obj.loggedin = true:obj.loggedin = false})
    })
    })

  }  


  public onSubmitUser (user: string): void {
    this.username = user
  }
}
