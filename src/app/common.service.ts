import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // Local url
  // private surveysUrl = 'http://localhost:3000/api/survey_response/';
  // Heroku url
  private surveysUrl = 'https://comp229-curvey-project.herokuapp.com/api/survey_response/';
  constructor(private httpClient: HttpClient) { }
  saveSurvey(survey){
    return this.httpClient.post(this.surveysUrl, survey)
  }

  updateSurvey(survey){
    return this.httpClient.post(this.surveysUrl+`${survey._id}`, survey)
  }

  getSurveys(survey_id){
    return this.httpClient.post(this.surveysUrl+'list/'+survey_id, survey_id)
  }

  deleteSurvey(id){
    return this.httpClient.post(this.surveysUrl+'delete/', {'_id':id});
  }
}
 
