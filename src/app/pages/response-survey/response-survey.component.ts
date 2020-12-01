import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import {CommonService} from '../../common.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-response-survey',
  templateUrl: './response-survey.component.html',
  styleUrls: ['./response-survey.component.css']
})
export class ResponseSurveyComponent implements OnInit {
  survey: any;
  responses: any;
  constructor(private route:ActivatedRoute,private router:Router, private service: CommonService) { }
  getResponses(survey){
    this.service.getSurveys(survey._id).subscribe(data => this.responses = this.formatData(data));
  }
  formatData(data){
    let formattedData = [];
    this.survey.questions.forEach((question, index)=>{
        let answers = [];
        data.forEach((response) => {
          answers.push(response.survey_response[index].question_response);
        });
        formattedData.push({
          label: question.label,
          answers: answers
        })
    });
    return formattedData;
  }
  ngOnInit(): void {
    this.survey = window.history.state;
    this.getResponses(this.survey);
  }

}
