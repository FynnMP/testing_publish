import { Component, OnInit, Output, Input, EventEmitter, ɵangular_packages_core_core_bj } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  ngOnInit(): void {

  }

  public Username = "";
  public usernames:any = [];
  public usercolors: any =[];
  public usercol: any = [];

  

  public addUser(user: string): void{
    user = user.replace("\n", "")
    
    // get users and their color out of our history
    for (var i = 0; i < this.historyreg.length; i++) {
      this.usernames.push(this.historyreg[i].nickname)
      this.usercolors.push(this.historyreg[i].color)
    }

    // get unique users and colors
    this.usernames = Array.from(new Set(this.usernames));
    //this.usercolors = Array.from(new Set(this.usercolors));

    console.log(this.usernames)
    // create array with user and color bundle 
    for (var i = 0; i < this.usernames.length; i++) {
      this.usercol.push({
          user: this.usernames[i],
          color: this.usercolors[i]
      })}
    
    // get unique users and their color
    function uniqueByKey(array: any, key:any) {
        return [...new Map(array.map((x:any) => [x[key], x])).values()];
      }
    this.usercol = uniqueByKey(this.usercol, "user")

    if(this.usernames.indexOf(user) !== -1){
        alert("Username taken. Please choose a different one!")
        this.Username = "";
    }
    else {
      this.submitUser.emit(user);
      this.Username = "";
    }
  }
  



}
