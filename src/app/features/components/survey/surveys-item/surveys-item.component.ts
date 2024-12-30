import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Survey} from '../../../models/survey.model';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SurveyListService} from '../../../services/survey-list.service';

@Component({
  selector: 'app-surveys-item',
  imports: [
    CommonModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './surveys-item.component.html',
  styleUrl: './surveys-item.component.css'
})
export class SurveysItemComponent {
  @Input() survey!: Survey;
  @Output() delete = new EventEmitter<string>();

  SurveyService = inject(SurveyListService);


  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.SurveyService.deleteSurvey(id).subscribe({
        next: () => {
          console.log('Survey deleted:', id);
          this.delete.emit(id);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
