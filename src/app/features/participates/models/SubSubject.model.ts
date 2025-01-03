import {Question} from '../../questions/model/question.model';

interface SubSubject {
  id: number;
  title: string;
  questions: Question[];
  subSubjects: SubSubject[];
}
