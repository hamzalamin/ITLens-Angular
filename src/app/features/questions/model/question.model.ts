import {Answer} from '../../answers/model/answer.model';

export interface Question {
  id: string,
  text: string,
  questionType: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  answerCount: number,
  answers: Answer[],
}
