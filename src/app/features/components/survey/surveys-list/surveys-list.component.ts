import { Component, inject, OnInit } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { SurveyListService } from '../../../services/survey-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surveys-list',
  imports: [CommonModule],
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
