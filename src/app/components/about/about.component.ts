import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutUsers: any
  constructor(private userService: UserService) { }
  // public ise .htlm'i içinde kullanılır, private ise kullanılamaz

  ngOnInit(): void {
    this.userService.getUsersAll()
    this.setAboutUser()
  }
  setAboutUser() {
    this.aboutUsers = this.userService.usersAll
  }
}
