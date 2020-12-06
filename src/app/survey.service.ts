import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
// Local url
// private surveysUrl = 'http://localhost:3000/api/';
// Heroku url
private surveysUrl = 'https://comp229-curvey-project.herokuapp.com/api/';
constructor(private httpClient: HttpClient) { }
saveSurvey(survey){
  return this.httpClient.post(this.surveysUrl+'survey/create/', survey)
}

updateSurvey(survey){
  return this.httpClient.post(this.surveysUrl+'survey/update/', survey)
}

getSurveys(){
  return this.httpClient.get(this.surveysUrl+'survey/')
}

deleteSurvey(id){
  return this.httpClient.post(this.surveysUrl+'survey/delete/', {'_id':id});
}
}
