import {Question} from '../../questions/model/question.model';

export interface Subject {
  id: String,
  title: String,
  questions: Question[],
  subSubjects: Subject[],
}
