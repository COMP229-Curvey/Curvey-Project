import { Component, OnInit } from '@angular/core';
import {BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent extends BasePageComponent implements OnInit {
  
  constructor(route : ActivatedRoute, private service: CommonService) {
    super(route);
  }

  ngOnInit(): void {
    this.service.getSurveys().subscribe(data => console.log(data));
    
  }

}
