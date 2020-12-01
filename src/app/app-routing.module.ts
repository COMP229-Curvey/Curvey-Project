import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyManagementComponent } from './pages/survey-management/survey-management.component';
import { UsersComponent } from './pages/users/users.component';
import { OpenSurveyComponent } from './pages/open-survey/open-survey.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component';
import { ResponseSurveyComponent } from './pages/response-survey/response-survey.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,data:{title:'Home'}},
  {path:'survey',component:SurveyComponent,data:{title:'Survey', canActivate: [AuthGuard]}},
  {path:'survey-management',component:SurveyManagementComponent,data:{title:'Survey Management', canActivate: [AuthGuard]}},
  {path:'users',component:UsersComponent,data:{title:'Users Management', canActivate: [AuthGuard]}},
  {path:'response-survey',component:ResponseSurveyComponent,data:{title:'Response Survey Managment', canActivate: [AuthGuard]}},
  {path:'open-survey',component:OpenSurveyComponent},
  {path:'edit-survey',component:EditSurveyComponent, canActivate: [AuthGuard]},
  {path:'edit-user',component:EditUserComponent, canActivate: [AuthGuard]},
  { path: 'registration', component: RegistrationComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
