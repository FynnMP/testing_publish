import { Component, OnInit, Output, Input, EventEmitter, ɵangular_packages_core_core_bj } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() public submitUser = new EventEmitter<string>();
  @Input() public User = "";
  @Input()  public historyreg: any;

  constructor(private http: HttpClient) { }

  // get unique users and their color out of array with two variables 
  public uniqueByKey(array: any, key:any) {
    return [...new Map(array.map((x:any) => [x[key], x])).values()];
  }
  

  ngOnInit(): void {
    const usersinchat = interval(1000);
    usersinchat.subscribe(() => {
      // creating json array with user and their color
      for (var i = 0; i < this.historyreg.length; i++) {
        if (this.historyreg[i].nickname != this.loggedinUser) {
          this.usercol.push({
            user: this.historyreg[i].nickname,
            color: this.historyreg[i].color
        })}
        }
                
                
    // getting only distinct users out of our history
    this.usercol = this.uniqueByKey(this.usercol, "user")
   })
  }

  public Username = "";
  public usernames:any = [];
  public usercolors: any =[];
  public usercol: any = [];

  public loggedinUser = "";


  public addUser(user: string): void{
    user = user.replace("\n", "")
    user = user.replace(/\s/g, "")
    this.loggedinUser = user
    // get users out of our history
    for (var i = 0; i < this.historyreg.length; i++) {
       this.usernames.push(this.historyreg[i].nickname)
    }

    // get unique users
    this.usernames = Array.from(new Set(this.usernames));

    
    

    // check for usernames, so we cant choose a already taken name
    if(this.usernames.indexOf(user) !== -1){
      alert("Diesen Username gibt es bereits. Bitte wählen Sie einen anderen.")
      this.Username = "";
    }
    //check for username length
    else if(user.length >= 10){
      alert("Bitte wählen Sie einen kürzeren Username.")
      this.Username = "";
    }
    else {
      this.submitUser.emit(user);
      this.Username = "";
    }
    
  }
  
}
