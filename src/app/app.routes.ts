import { Routes } from '@angular/router';
import {
  SurveysEditionsItemComponent
} from './features/components/survey/surveys-editions-item/surveys-editions-item.component';
import {SurveysListComponent} from './features/components/survey/surveys-list/surveys-list.component';
import {QuestionComponent} from './features/components/question/question.component';
import {AnswerComponent} from './features/components/answer/answer.component';

export const routes: Routes = [
  {path: '', component: SurveysListComponent},
  {path: 'surveys', component: SurveysListComponent},
  { path: 'edition/:id', component: SurveysEditionsItemComponent },
  {  path: 'subject/:id/questions', component: QuestionComponent },
  {  path: 'question/:id/answers', component: AnswerComponent },
];
