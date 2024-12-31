import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {SurveyEdition} from '../model/survey-edition.model';


@Injectable({
  providedIn: "root",
})

export class SurveyEditionService {

  private readonly apiUrl = "http://localhost:8888/survey/edition";
  constructor(private http: HttpClient) {}

  getSurveyEditionById(id: number): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.apiUrl}/${id}`);
  }

}
