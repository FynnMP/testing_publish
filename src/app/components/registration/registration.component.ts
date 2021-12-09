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
  }

  public Username = "";
  public data = [];
  

  public addUser(user: string): void{
    
    this.submitUser.emit(user);
    this.Username = "";
    }
  



}
