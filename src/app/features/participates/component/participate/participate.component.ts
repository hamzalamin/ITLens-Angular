import {Component, OnInit} from '@angular/core';
import {SurveyEdition} from '../../../survey/model/survey-edition.model';
import {SurveyEditionService} from '../../../survey/service/survey-edition.service';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../../questions/model/question.model';
import {FormsModule} from '@angular/forms';
import {Answer} from '../../../answers/model/answer.model';

@Component({
  selector: 'app-participate',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './participate.component.html',
  styleUrl: './participate.component.css'
})
export class ParticipateComponent implements OnInit {
  surveyEdition!: SurveyEdition;
  id!: number;
  currentQuestionIndex: number = 0;
  questions: Question[] = [];

  constructor(
    private route: ActivatedRoute,
    private surveyEditionService: SurveyEditionService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadEdition();
    });
  }


  loadEdition() {
    this.surveyEditionService.getSurveyEditionById(this.id)
      .subscribe({
        next: (data) => {
          this.surveyEdition = data;
          this.extractQuestions()
          console.log('baghin as2ila o 2ajwiba:', this.surveyEdition);
        },
        error: (error) => {
          console.error('Erreur :', error);
        }
      });
  }

  extractQuestions(): void {
    if (this.surveyEdition?.subjects?.length > 0) {
      this.questions = this.surveyEdition.subjects[0].subSubjects.flatMap(subSubject =>
        subSubject.questions
      );
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  checkedAnswers: Set<string> = new Set();

  isChecked(answerId: string): boolean {
    return this.checkedAnswers.has(answerId);
  }

  toggleCheck(answerId: string): void {
    if (this.checkedAnswers.has(answerId)) {
      this.checkedAnswers.delete(answerId);
    } else {
      this.checkedAnswers.add(answerId);
    }
  }

  getLabelClasses(answerId: string): string {
    return `answer-label ${this.isChecked(answerId) ? 'checked' : 'unchecked'}`;
  }

}