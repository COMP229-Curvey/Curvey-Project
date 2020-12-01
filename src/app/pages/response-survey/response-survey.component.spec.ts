import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSurveyComponent } from './response-survey.component';

describe('ResponseSurveyComponent', () => {
  let component: ResponseSurveyComponent;
  let fixture: ComponentFixture<ResponseSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
