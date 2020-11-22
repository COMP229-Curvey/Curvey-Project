import { Component, OnInit } from '@angular/core';
import {BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    super(route);
  }

  onSubmit(form)
  {
    console.log("Form submit works");
  }

  ngOnInit(): void {
  }

}
