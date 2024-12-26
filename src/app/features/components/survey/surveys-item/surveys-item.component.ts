import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Survey} from '../../../models/survey.model';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

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
}
