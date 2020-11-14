import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private surveysUrl = 'http://localhost:3000/api/survey/';
  constructor(private httpClient: HttpClient) { }
  saveSurvey(survey){
    return this.httpClient.post(this.surveysUrl+'create/', survey)
  }

  updateSurvey(survey){
    return this.httpClient.post(this.surveysUrl+'update/', survey)
  }

  getSurveys(){
    return this.httpClient.get(this.surveysUrl)
  }

  deleteSurvey(id){
    return this.httpClient.post(this.surveysUrl+'delete/', {'_id':id});
  }
}
 
