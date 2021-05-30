import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title1: string = "proje"
  "title2": string = "proje2"
  constructor() { }

  ngOnInit(): void {
    this.setTitle()
  }
  setTitle() {
    this.title1 = "newTitle"
  }
}
