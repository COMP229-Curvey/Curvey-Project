import { Component} from '@angular/core';
import { Survey } from '../../models/survey.model';
import {SurveyRepository} from '../../models/survey.repository'



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent{
  
  constructor(private repository:SurveyRepository) {  
  }

  get surveys():Survey[]
  {
    return this.repository.getSurveys();
  }

}








