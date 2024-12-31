import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../../questions/model/question.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private readonly apiUrl = "http://localhost:8888/questions";
  constructor(private http: HttpClient) { }

  getAnswersOfQuestionById(id: number): Observable<Question>{
    return this.http.get<Question>(`${this.apiUrl}/${id}`);
  }
}
