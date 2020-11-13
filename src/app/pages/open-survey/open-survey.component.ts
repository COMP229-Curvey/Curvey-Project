import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-open-survey',
  templateUrl: './open-survey.component.html',
  styleUrls: ['./open-survey.component.css']
})
export class OpenSurveyComponent implements OnInit {
  survey: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.survey = window.history.state;
  }

}
