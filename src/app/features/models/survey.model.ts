import {SurveyEdition} from './survey-edition.model';
import {Owner} from './owner.model';

export interface Survey{
  id: String,
  title: String,
  description: String,
  owner: Owner,
  surveyEdition: SurveyEdition[],
}
