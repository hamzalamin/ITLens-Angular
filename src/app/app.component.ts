import { Component } from '@angular/core';
import {AdminComponent} from './features/shared/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [AdminComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
