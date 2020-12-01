import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import {CommonService} from './common.service';
import {SurveyService} from './survey.service';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { OpenSurveyComponent } from './pages/open-survey/open-survey.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component'
import {FormsModule} from "@angular/forms";
// Added for security
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UsersComponent } from './pages/users/users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { SurveyManagementComponent } from './pages/survey-management/survey-management.component';
import { ResponseSurveyComponent } from './pages/response-survey/response-survey.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
// End of security code

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    SurveyComponent,
    OpenSurveyComponent,
    EditSurveyComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    EditUserComponent,
    SurveyManagementComponent,
    ResponseSurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // Added for security
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //whitelistedDomains: ['localhost:3000'], // Change this for production
        //blacklistedRoutes: ['localhost:3000/users/signIn'] // Change this for production
      }
    })
    // End of security code
  ],
  providers: [CommonService, SurveyService, UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
