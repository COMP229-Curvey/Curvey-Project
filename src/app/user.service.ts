import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
// Local url
private surveysUrl = 'http://localhost:3000/api/users/';
// Heroku url
// private surveysUrl = 'https://comp229-curvey-project.herokuapp.com/api/users/';
constructor(private httpClient: HttpClient) { }
saveUser(survey){
  return this.httpClient.post(this.surveysUrl, survey)
}

signUp(survey){
  return this.httpClient.post(this.surveysUrl+'signUp/', survey)
}

updateUser(survey){
  return this.httpClient.put(this.surveysUrl+`${survey.username}`, survey)
}

getUsers(){
  return this.httpClient.get(this.surveysUrl+'list/')
}

deleteUser(user){
  return this.httpClient.post(this.surveysUrl+'delete/', {'username':user.username});
}
}
