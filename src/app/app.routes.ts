import { Routes } from '@angular/router';
import {
  SurveysEditionsItemComponent
} from './features/components/survey/surveys-editions-item/surveys-editions-item.component';
import {SurveysListComponent} from './features/components/survey/surveys-list/surveys-list.component';
import {QuestionComponent} from './features/components/question/question.component';
import {AnswerComponent} from './features/components/answer/answer.component';
import {CreateSurveyComponent} from './features/components/survey/CRUDSurvey/create-survey/create-survey.component';
import {UpdateSurveyComponent} from './features/components/survey/CRUDSurvey/update-survey/update-survey.component';

export const routes: Routes = [
  { path: '', component: SurveysListComponent},
  { path: 'surveys', component: SurveysListComponent},
  { path: 'edition/:id', component: SurveysEditionsItemComponent },
  { path: 'subject/:id/questions', component: QuestionComponent },
  { path: 'question/:id/answers', component: AnswerComponent },
  { path: 'create/survey', component: CreateSurveyComponent},
  {  path: 'surveys-update/:id', component: UpdateSurveyComponent}
];
