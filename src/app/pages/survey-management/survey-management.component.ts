import { Component, OnInit } from '@angular/core';
import {BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import {SurveyService} from '../../survey.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-survey-management',
  templateUrl: './survey-management.component.html',
  styleUrls: ['./survey-management.component.css']
})
export class SurveyManagementComponent extends BasePageComponent implements OnInit {

  constructor(public auth: AuthService, route : ActivatedRoute, private router: Router, private service: SurveyService) {
    super(route);
  }
  surveys:any;

  getSurveys(){
    this.service.getSurveys().subscribe(data => this.surveys = data);
  }

  editSurvey(survey){
    this.router.navigate(['/edit-survey'],{state: survey})
  }

  deleteSurvey(id){
    this.service.deleteSurvey(id).subscribe(data=>this.getSurveys());
  }

  createSurvey(){
    this.router.navigate(['/edit-survey'],{state: null})
  }

  responseSurvey(survey){
    this.router.navigate(['/response-survey'],{state: survey})
  }

  ngOnInit(): void {
    this.getSurveys();
  }

}
