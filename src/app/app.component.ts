import { Component } from '@angular/core';
import {SurveysListComponent} from './features/components/survey/surveys-list/surveys-list.component';

@Component({
  selector: 'app-root',
  imports: [SurveysListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
