import { Component, OnInit } from '@angular/core';
import {BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../user.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute, private router:Router, private service: UserService) { 
    super(route);
  }
  public forename: string;
  public surname: string;
  public username: string;
  public password: string;
  public email: string;
  onSubmit(form)
  {
    let value = form.form.value;
    this.service.signUp(value).subscribe(data=>this.router.navigate(['/login']));
  }

  ngOnInit(): void {
  }

}
