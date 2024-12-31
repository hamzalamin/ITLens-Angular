import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SurveyEditionService} from '../../../services/survey-edition.service';
import {SurveyEdition} from '../../../models/survey-edition.model';

@Component({
  selector: 'app-surveys-editions-item',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './surveys-editions-item.component.html',
  styleUrl: './surveys-editions-item.component.css'
})
export class SurveysEditionsItemComponent implements OnInit {
  surveyEdition!: SurveyEdition;
  id!: number;


  constructor(
    private route: ActivatedRoute,
    private surveyEditionService: SurveyEditionService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadSurveyEdition();
    });
  }

  loadSurveyEdition() {
    this.surveyEditionService.getSurveyEditionById(this.id)
      .subscribe({
        next: (data) => {
          this.surveyEdition = data;
          console.log('Données récupérées:', this.surveyEdition);
        },
        error: (error) => {
          console.error('Erreur lors de la récupération:', error);
        }
      });
  }

}
