import { Component } from '@angular/core';
import {SurveysListComponent} from './features/components/survey/surveys-list/surveys-list.component';
import {NavbarComponent} from './features/components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [SurveysListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
