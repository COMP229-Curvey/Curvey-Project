import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSurveyComponent } from './open-survey.component';

describe('OpenSurveyComponent', () => {
  let component: OpenSurveyComponent;
  let fixture: ComponentFixture<OpenSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
