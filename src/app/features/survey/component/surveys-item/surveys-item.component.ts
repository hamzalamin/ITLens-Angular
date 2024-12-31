import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Survey} from '../../model/survey.model';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {SurveyListService} from '../../service/survey-list.service';

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

  popupContainer!: HTMLElement;
  openPopupButton!: HTMLButtonElement;
  closePopupButton!: HTMLButtonElement;
  constructor(private router: Router) {}

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

  onEdit(survey: Survey) {
    this.router.navigate(['/surveys-update', survey.id]);
  }

  ngOnInit(): void {
    this.popupContainer = document.getElementById("pop-container") as HTMLElement;
    this.openPopupButton = document.getElementById("openUp") as HTMLButtonElement;
    this.closePopupButton = document.getElementById("closeUp") as HTMLButtonElement;

    if (this.openPopupButton && this.closePopupButton) {
      this.openPopupButton.addEventListener("click", this.showPopup.bind(this));
      this.closePopupButton.addEventListener("click", this.hidePopup.bind(this));
    }
  }

  showPopup(): void {
    if (this.popupContainer) {
      this.popupContainer.classList.remove("hidden");
    }
  }

  hidePopup(): void {
    if (this.popupContainer) {
      this.popupContainer.classList.add("hidden");
    }
  }
}
