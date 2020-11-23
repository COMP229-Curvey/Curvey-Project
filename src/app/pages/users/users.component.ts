import { Component, OnInit } from '@angular/core';
import {BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../user.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends BasePageComponent implements OnInit {

  constructor(private auth: AuthService, route : ActivatedRoute, private router: Router, private service: UserService) {
    super(route);
  }
  users: any;
  
  getUsers(){
    this.service.getUsers().subscribe(data => this.users = data);
  }

  editUser(user){
    this.router.navigate(['/edit-user'],{state: user})
  }

  deleteUser(user){
    this.service.deleteUser(user).subscribe(data=>this.getUsers());
  }

  createUser(){
    this.router.navigate(['/edit-user'],{state: null})
  }
  ngOnInit(): void {
    this.getUsers();
  }

}
