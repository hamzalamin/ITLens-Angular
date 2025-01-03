import { Routes } from '@angular/router';
import {
  SurveysEditionsItemComponent
} from './features/survey/component/surveys-editions-item/surveys-editions-item.component';
import {SurveysListComponent} from './features/survey/component/surveys-list/surveys-list.component';
import {CreateSurveyComponent} from './features/survey/component/create-survey/create-survey.component';
import {UpdateSurveyComponent} from './features/survey/component/update-survey/update-survey.component';
import {QuestionComponent} from './features/questions/component/question/question.component';
import {AnswerComponent} from './features/answers/component/answer/answer.component';
import {ParticipateComponent} from './features/participates/component/participate/participate.component';

export const routes: Routes = [
  { path: '', component: SurveysListComponent},
  { path: 'surveys', component: SurveysListComponent},
  { path: 'edition/:id', component: SurveysEditionsItemComponent },
  { path: 'subject/:id/questions', component: QuestionComponent },
  { path: 'question/:id/answers', component: AnswerComponent },
  { path: 'create/survey', component: CreateSurveyComponent},
  { path: 'surveys-update/:id', component: UpdateSurveyComponent},
  { path: 'participate/survey/edition/:id', component: ParticipateComponent}
];
