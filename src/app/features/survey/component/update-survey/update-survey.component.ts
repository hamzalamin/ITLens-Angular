import {Component, OnInit} from '@angular/core';
import {Survey} from '../../model/survey.model';
import {SurveyListService} from '../../service/survey-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-survey',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './update-survey.component.html',
  styleUrl: './update-survey.component.css'
})
export class UpdateSurveyComponent implements OnInit{
  survey!: Survey;

  constructor(
    private surveyService: SurveyListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const surveyId = this.route.snapshot.paramMap.get('id');
    if (surveyId) {
      this.surveyService.getSurveyById(surveyId).subscribe({
        next: (data) => {
          this.survey = data;
        },
        error: (err) => {
          console.error('Error fetching survey:', err);
        }
      });
    }
  }


  onUpdate() {
    if (confirm('Are you sure you want to update this survey?')) {
      const updatedSurvey = { ...this.survey };
      updatedSurvey.title = this.survey.title;
      updatedSurvey.description = this.survey.description;
      if (this.survey.owner && this.survey.owner.id) {
        updatedSurvey.ownerId = Number(this.survey.owner.id);
      } else {
        console.error("Owner ID is missing");
        return;
      }
      console.log('Sending survey data:', updatedSurvey);
      const surveyId: String = this.survey.id;
      this.surveyService.updateSurvey(surveyId.toString(), updatedSurvey).subscribe({
        next: (updatedSurvey) => {
          console.log('Survey updated successfully:', updatedSurvey);
          this.router.navigate(['/'])
        },
        error: (err) => {
          console.error('Error updating survey:', err);
        }
      });
    }
  }





}

