import {Component, Input} from '@angular/core';
import {Survey} from '../../../models/survey.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-surveys-item',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './surveys-item.component.html',
  styleUrl: './surveys-item.component.css'
})
export class SurveysItemComponent {
  @Input() survey!: Survey;
}
