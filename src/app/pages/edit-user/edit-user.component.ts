import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;
  method: string;
  constructor(private router:Router, private service: UserService) { }
  onSubmit(form){
    let value = form.form.value;
    if(this.method === 'edit'){
      this.service.updateUser(value).subscribe(data=>this.router.navigate(['/users']));
    }else{
      this.service.saveUser(value).subscribe(data=>this.router.navigate(['/users']));
    }
  }
  ngOnInit(): void {
    this.user = window.history.state;
    if(!this.user.forename){
      this.method = 'create';
    }else{
      this.method = 'edit';
    }
  }

}
