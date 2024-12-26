import { Component } from '@angular/core';
import {SurveysListComponent} from './features/components/survey/surveys-list/surveys-list.component';
import {NavbarComponent} from './features/components/shared/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {AdminComponent} from './features/components/shared/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [SurveysListComponent, NavbarComponent, RouterOutlet, AdminComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
