import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import {SurveyService} from '../../survey.service';
@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {
  survey: any;
  method: string;
  constructor(private router:Router, private service: SurveyService) { }

  onSubmit(form){
    var value = form.form.value;
    if(this.method === 'edit'){
      this.service.updateSurvey(this.formatResponse(value, this.survey._id)).subscribe(data=>this.router.navigate(['/survey-management']));
    }else{
      this.service.saveSurvey(this.formatResponse(value)).subscribe(data=>this.router.navigate(['/survey-management']));
    }
  }

  formatResponse(value, id = null){
    var labels = [];
    var styles = [];
    for (var prop in value) {
      if (Object.prototype.hasOwnProperty.call(value, prop)) {
        
        if(prop.includes('label')){
          labels.push(value[prop]);
        }
        
        if(prop.includes('style')){
          styles.push(value[prop]);
        }
      }
    }
    let questions = [];
    labels.forEach((label, index)=>{
      questions.push({label: label, style:styles[index]});
    });
    let response = {title:value.title, description:value.description, questions};
    if(id){
      response['_id'] = id;
    }
    return response;
  }

  addField(){
    this.survey.questions.push({label:'', style:0});
  }

  ngOnInit(): void {
    this.survey = window.history.state;
    if(!this.survey.title){
      this.method = 'create';
      this.survey = {questions:[{label:'', style:0}], title:'', description:''};
    }else{
      this.method = 'edit';
    }
  }

}
