import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
// Local url
// private usersUrl = 'http://localhost:3000/api/users/';
// Heroku url
private usersUrl = 'https://comp229-curvey-project.herokuapp.com/api/users/';
constructor(private httpClient: HttpClient) { }
saveUser(user){
  return this.httpClient.post(this.usersUrl, user)
}

signUp(user){
  return this.httpClient.post(this.usersUrl+'signUp/', user)
}

updateUser(user){
  return this.httpClient.put(this.usersUrl+`${user.username}`, user)
}

getUsers(){
  return this.httpClient.get(this.usersUrl+'list/')
}

deleteUser(user){
  return this.httpClient.post(this.usersUrl+'delete/', {'username':user.username});
}
}
