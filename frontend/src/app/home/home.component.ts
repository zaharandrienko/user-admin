import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  show: boolean = false
  newUser: User = new User();

  users: User[]

  searchUser: string
  getUsers() {
    this.userService.getUsers()
      .subscribe(user => { this.users = user })
  }
  addUser() {
    let name = this.newUser.firstname
    let newAge = this.newUser.age
    let newId = this.newUser.id
    if (name && newAge && newId && !name.includes(" ") && newId > 0) {

      this.userService.addUser(this.newUser)
        .subscribe(e => {
          this.getUsers();

          this.newUser = new User();
        }
        );
    }
    else {
      // alert('Error "The firstname age or id you entered is not correct"');
      this.show = !this.show
    }
  }
  deleteUser(id: number) {

    this.userService.deleteUser(id)
      .subscribe(e => this.getUsers());
  }

  search() {

    this.userService.getUsersByFirstName(this.searchUser).subscribe(dataArray => {
      this.users = dataArray;
    })
  }
  showError() {
    this.show = !this.show
  }
  ngOnInit(): void {
    this.getUsers()
  }





}
