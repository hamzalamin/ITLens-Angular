import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../models/survey.model';


@Injectable({
  providedIn: 'root'
})
export class SurveyListService {
  private readonly apiUrl = 'http://localhost:8888/surveys';

  constructor(private http: HttpClient) { }

  public getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.apiUrl);
  }

  public createSurveys(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(this.apiUrl, survey);
  }

}
