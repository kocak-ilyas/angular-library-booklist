import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  "userName": string
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userName=this.userService.userName
  }

}
