import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetailer',
  templateUrl: './userdetailer.component.html',
  styleUrls: ['./userdetailer.component.css']
})
export class UserdetailerComponent implements OnInit {


  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router : Router
    ) { 

    }

  user: User = new User();

  updateUser() {
    

    this.userService.putUser(this.user.id, this.user).subscribe(e => {
      this.router.navigateByUrl("/home");
    } );
    // this.userService.putUser(id, user).subscribe(e => this.getUsers());
  }
  


  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUser(id).subscribe( u => this.user = u);

  }

}
