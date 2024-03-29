import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = "ali"
  usersAll: any
  apiUrl: string = "https://jsonplaceholder.typicode.com/"
  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.getUsersAll()
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUsersAll() {
    this.http.get(this.apiUrl + "users").subscribe(res => {
      this.usersAll = res
    })
    return this.usersAll
  }
  // getUsersAll() {
  //   this.http.get(this.apiUrl + "users").subscribe(res => {
  //     this.usersAll = res
  //   })
  // }

}
