import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { OpenSurveyComponent } from './pages/open-survey/open-survey.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,data:{title:'Home'}},
  {path:'survey',component:SurveyComponent,data:{title:'Survey', canActivate: [AuthGuard]}},
  {path:'open-survey',component:OpenSurveyComponent, canActivate: [AuthGuard]},
  {path:'edit-survey',component:EditSurveyComponent, canActivate: [AuthGuard]},
  { path: 'registration', component: RegistrationComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
