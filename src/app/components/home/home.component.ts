import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [{
    name: "mehmet",
    age: 20
  },
  {
    name: "mehmet2",
    age: 22
  },
  {
    name: "mehmet3",
    age: 23
  }]
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name: "mehmet10",
        age: 10
      },
      {
        name: "mehmet11",
        age: 11
      },
      {
        name: "mehmet12",
        age: 12
      },
      {
        name: "mehmet13",
        age: 13
      },
      {
        name: "mehmet14",
        age: 14
      },
      {
        name: "mehmet15",
        age: 15
      },
      {
        name: "mehmet16",
        age: 16
      }
    ]
  }

}
