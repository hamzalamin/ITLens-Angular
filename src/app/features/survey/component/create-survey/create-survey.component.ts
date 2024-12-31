import {Component, Input} from '@angular/core';
import {Survey} from '../../model/survey.model';
import {SurveyListService} from '../../service/survey-list.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-survey',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './create-survey.component.html',
  styleUrl: './create-survey.component.css'
})
export class CreateSurveyComponent {
  newSurvey: Survey = {
    id:'',
    title: '',
    description:'',
    ownerId: 1,
    surveyEditions: []
  }

  constructor(private surveyService: SurveyListService, private router: Router) {}

  onCreateSurvey() {
    this.surveyService.createSurveys(this.newSurvey).subscribe({
      next: (createdSurvey) => {
        console.log(createdSurvey);
        this.router.navigate(['/'])
      },
      error: (err) =>{
        console.log("errror here", err);
      }
    });
  }
}
