import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  "userName": string
  users: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userName = this.userService.userName
    this.getUser()
  }
  getUser() {
    this.userService
      .getUsers()
      .subscribe(res => {
        this.users = res
        console.log(this.users)
      })
  }
}
