import { Component, OnInit } from '@angular/core';
import {BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import {SurveyService} from '../../survey.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent extends BasePageComponent implements OnInit {
  
  constructor(public auth: AuthService, route : ActivatedRoute, private router: Router, private service: SurveyService) {
    super(route);
  }
  surveys:any;

  getSurveys(){
    this.service.getSurveys().subscribe(data => this.surveys = data);
  }

  openSurvey(survey){
    this.router.navigate(['/open-survey'],{state: survey})
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

  ngOnInit(): void {
    this.getSurveys();
  }

}
