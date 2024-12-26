import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: "root",
})

export class SurveyEditionService {

  private readonly apiUrl = "http://localhost:8888/survey/edition";
  constructor(private http: HttpClient) {}

  getSurveyEditionById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
