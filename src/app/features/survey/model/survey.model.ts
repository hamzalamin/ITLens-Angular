import {SurveyEdition} from './survey-edition.model';
import {Owner} from '../../models/owner.model';

export interface Survey{
  id: string,
  title: string,
  description: string,
  ownerId?: number;
  owner?: Owner,
  surveyEditions: SurveyEdition[],
}
