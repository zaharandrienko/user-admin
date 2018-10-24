import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) { }


  newUser: User = new User();

  users: User[]

  getUsers() {
    this.userService.getUsers()
      .subscribe(user => { this.users = user })
  }
  addUser() {
    this.userService.addUser(this.newUser)
      .subscribe(e => {
        this.getUsers();

        this.newUser = new User();
      }
      );


  }
  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(e => this.getUsers());
  }

  ngOnInit(): void {
    this.getUsers()
  }



  show: boolean = false

  showUpWindow() {
    this.show = !this.show
  }

  downUpWindow() {
    this.show = !this.show
  }

}
