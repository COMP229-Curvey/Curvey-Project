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
import {HttpClientModule} from '@angular/common/http';
import { OpenSurveyComponent } from './pages/open-survey/open-survey.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component'
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    SurveyComponent,
    OpenSurveyComponent,
    EditSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
