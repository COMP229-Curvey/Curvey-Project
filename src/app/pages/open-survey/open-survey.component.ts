import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import {CommonService} from '../../common.service';
import{ Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-open-survey',
  templateUrl: './open-survey.component.html',
  styleUrls: ['./open-survey.component.css']
})
export class OpenSurveyComponent implements OnInit {
  survey: any;
  responses: [];
  constructor(private route:ActivatedRoute,private router:Router, private service: CommonService) { }
  onSubmit(form){
    this.service.saveSurvey(this.formatResponse(form.form.value)).subscribe(data=>this.router.navigate(['/survey']));
  }

  formatResponse(value){
    let responses = [];
    for (var prop in value) {
      if (Object.prototype.hasOwnProperty.call(value, prop)) {
        responses.push({question_number: parseInt(prop), question_response: value[prop]})
      }
    }
    return {
      survey_id: this.survey._id,
      survey_response: responses
    }
  }
  ngOnInit(): void {
    this.survey = window.history.state;
  }

}
