import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnswerSubmission} from '../models/AnswerSubmission.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipateService {
  private readonly apiUrl = "http://localhost:8888/api/answers/participate";
  constructor(private http: HttpClient) {}

  submitAnswers(questionId: string, answerIds: string[]): Observable<any> {
    const payload: AnswerSubmission = {
      createMultipleAnswersAndOneQuestionDto: {
        questionId,
        answers: answerIds.map((id) => ({ id: parseInt(id, 10) })),
      },
    };

    return this.http.post(this.apiUrl, payload, { responseType: 'text' });
  }
}
