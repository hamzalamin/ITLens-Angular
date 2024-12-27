import {Question} from './question.model';

export interface Subject {
  id: String,
  title: String,
  questions: Question[],
  subSubjects: Subject[],
}
