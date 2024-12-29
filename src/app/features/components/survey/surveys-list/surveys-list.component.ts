import { Component, inject, OnInit } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { SurveyListService } from '../../../services/survey-list.service';
import { CommonModule } from '@angular/common';
import {SurveysItemComponent} from '../surveys-item/surveys-item.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SurveysEditionsItemComponent} from '../surveys-editions-item/surveys-editions-item.component';

@Component({
  selector: 'app-surveys-list',
  imports: [CommonModule, SurveysItemComponent, RouterOutlet, SurveysEditionsItemComponent, RouterLink],
  templateUrl: './surveys-list.component.html',
  standalone: true,
  styleUrl: './surveys-list.component.css'
})
export class SurveysListComponent implements OnInit {
  surveys!: Survey[];
  SurveyService = inject(SurveyListService);

  ngOnInit() {
    this.SurveyService.getSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        console.log(this.surveys);
      },
      error: (err) => {
        console.error('Error fetching surveys:', err);
      }
    });
  }

}
