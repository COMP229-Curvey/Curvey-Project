import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import {CommonService} from '../../common.service';
@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {
  survey: any;
  constructor(private router:Router, private service: CommonService) { }

  onSubmit(form){
    var value = form.form.value;
    if(value.label && value.style){
      value.questions = [{label:value.label, style:value.style}];
      value._id = this.survey._id;
      delete value.label;
      delete value.style;
      this.service.updateSurvey(value).subscribe(data=>this.router.navigate(['/survey']));
    }else{
      value.questions = [{label:"Placeholder", style:1}];
      this.service.saveSurvey(value).subscribe(data=>this.router.navigate(['/survey']));
    }
  }

  ngOnInit(): void {
    this.survey = window.history.state;
  }

}
