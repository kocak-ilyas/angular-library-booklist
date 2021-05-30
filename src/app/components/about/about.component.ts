import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public userService: UserService) { }
  // public ise .htlm'i içnde kullanılır, private ise kullanılamaz

  ngOnInit(): void {

  }

}
