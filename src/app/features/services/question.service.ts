import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly apiUrl = "http://localhost:8888/subjects";

  constructor(private http: HttpClient) {
  }

  getQuestionsOfSubjectById(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.apiUrl}/${id}`);
  }
}
