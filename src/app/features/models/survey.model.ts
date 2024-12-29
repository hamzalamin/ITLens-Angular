import {SurveyEdition} from './survey-edition.model';
import {Owner} from './owner.model';

export interface Survey{
  id: String,
  title: String,
  description: String,
  ownerId?: number;
  owner?: Owner,
  surveyEditions: SurveyEdition[],
}
