import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../model/survey.model';


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

  public deleteSurvey(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateSurvey(id: string, updatedSurvey: Survey): Observable<Survey> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Survey>(url, updatedSurvey);
  }

  getSurveyById(id: string): Observable<Survey> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Survey>(url);
  }

}
