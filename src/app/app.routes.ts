import { Routes } from '@angular/router';
import {
  SurveysEditionsItemComponent
} from './features/components/survey/surveys-editions-item/surveys-editions-item.component';
import {SurveysListComponent} from './features/components/survey/surveys-list/surveys-list.component';

export const routes: Routes = [
  {path: '', component: SurveysListComponent},
  {path: 'surveys', component: SurveysListComponent},
  { path: 'edition/:id', component: SurveysEditionsItemComponent },
];
