import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private httpClient: HttpClient) { }
  saveSurvey(survey){
    return this.httpClient.post('http://localhost:8080/survey/create/', survey)
  }

  updateSurvey(survey){
    return this.httpClient.post('http://localhost:8080/survey/update/', survey)
  }

  getSurveys(){
    return this.httpClient.get('http://localhost:8080/survey/')
  }

  deleteSurvey(id){
    return this.httpClient.post('http://localhost:8080/survey/delete/', {'_id':id});
  }
}
 
