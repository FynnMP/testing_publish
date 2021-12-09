import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input()  public history: any;
  @Input () public User = "";

  constructor() { }

  ngOnInit(): void {
  }

}
