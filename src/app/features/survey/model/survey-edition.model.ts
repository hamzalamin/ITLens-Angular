import {Survey} from './survey.model';
import {Subject} from './subject.model';

export interface SurveyEdition {
  id: String,
  creationDate: String,
  startDate: String,
  date: String,
  surveyId?: string,
  survey?: Survey,
  subjects: Subject[]
}
