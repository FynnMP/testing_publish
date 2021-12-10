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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/").subscribe((r) => this.data = r);
    console.log(this.data.length)
    for (var i = 0; i < this.data.length; i++) {
      this.usernames.push(this.data[i].nickname)}
  }

  public Username = "";
  public data:any = [];
  public usernames:any = [];
  

  public addUser(user: string): void{
    
    this.http.get("http://localhost:3000/").subscribe((r) => this.data = r);
    console.log(this.data.length)
    for (var i = 0; i < this.data.length; i++) {
      this.usernames.push(this.data[i].nickname)}

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
