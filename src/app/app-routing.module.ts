import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,data:{title:'Home'}},
  {path:'survey',component:SurveyComponent,data:{title:'Survey'}},
  { path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
