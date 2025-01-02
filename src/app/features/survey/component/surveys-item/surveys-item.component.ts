import {ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Survey} from '../../model/survey.model';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SurveyListService} from '../../service/survey-list.service';
import {SurveyEdition} from '../../model/survey-edition.model';
import {SurveyEditionService} from '../../service/survey-edition.service';

@Component({
  selector: 'app-surveys-item',
  imports: [CommonModule, RouterLink, FormsModule],
  standalone: true,
  templateUrl: './surveys-item.component.html',
  styleUrl: './surveys-item.component.css'
})
export class SurveysItemComponent implements OnInit{
  @Input() survey!: Survey;
  @Output() delete = new EventEmitter <string>();
  SurveyService = inject(SurveyListService);
  popupContainer!: HTMLElement;
  openPopupButton!: HTMLButtonElement;
  closePopupButton!: HTMLButtonElement;
  // edition: SurveyEdition = {} as SurveyEdition;
  selectedSurveyId!: string;
  edition: SurveyEdition = {
    id: '',
    creationDate: '',
    startDate: '',
    date: '',
    surveyId: '',
    subjects: []
  };



  constructor(private router: Router, private editionService: SurveyEditionService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("rendred here");
    this.popupContainer = document.getElementById("pop-container") as HTMLElement;
    this.openPopupButton = document.getElementById("openUp") as HTMLButtonElement;
    this.closePopupButton = document.getElementById("closeUp") as HTMLButtonElement;
    if (this.closePopupButton) {
      this.closePopupButton.addEventListener("click", this.hidePopup.bind(this));
    }
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.SurveyService.deleteSurvey(id).subscribe({
        next: () => this.delete.emit(id),
        error: (err) => console.error(err),
      });
    }
  }

  onEdit(survey: Survey) {
    this.router.navigate(['/surveys-update', survey.id]);
  }

  showPopup(id: string): void {
    console.log('pop id : ', id);
    this.selectedSurveyId = id;
    console.log("brojjola lmakhdem : ", this.selectedSurveyId);
    this.cd.detectChanges();
    if (this.popupContainer) {
      this.popupContainer.classList.remove("hidden");
    }
  }

  hidePopup(): void {
    if (this.popupContainer) {
      this.popupContainer.classList.add("hidden");
    }
  }

  onCreateEdition(edition: SurveyEdition): void {
    if (!this.selectedSurveyId) {
      console.error('No survey ID selected!');
      return;
    }
    edition.surveyId = this.selectedSurveyId;
    console.log('Creating edition for surveyId:', edition.surveyId);
    this.editionService.createSurveyEdition(edition).subscribe({
      next: () => {
        console.log('Edition created successfully');
        this.router.navigate(['/']);
      },
      error: (err) => console.error('Error creating edition:', err),
    });
  }

}
