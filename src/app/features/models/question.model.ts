import {Answer} from './answer.model';

export interface Question {
  id: string,
  text: string,
  answerCount: number,
  answers: Answer[],
}
