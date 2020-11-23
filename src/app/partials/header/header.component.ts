import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;

  constructor(public auth: AuthService,private router: Router, private route:ActivatedRoute) { }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {}

}
