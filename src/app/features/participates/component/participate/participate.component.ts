import {Component, OnInit} from '@angular/core';
import {SurveyEdition} from '../../../survey/model/survey-edition.model';
import {SurveyEditionService} from '../../../survey/service/survey-edition.service';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../../questions/model/question.model';
import {FormsModule} from '@angular/forms';
import {ParticipateService} from '../../services/participate.service';

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
  checkedAnswers: Set<string> = new Set();
  isSurveyCompleted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private surveyEditionService: SurveyEditionService,
    private participateService: ParticipateService
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

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  nextQuestion(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const selectedAnswers = Array.from(this.checkedAnswers);

    this.participateService
      .submitAnswers(currentQuestion.id.toString(), selectedAnswers)
      .subscribe({
        next: () => {
          this.checkedAnswers.clear();
          if (this.isLastQuestion()) {
            this.isSurveyCompleted = true;
          } else {
            this.currentQuestionIndex++;
          }
        },
        error: (error) => {
          console.error('Error submitting answers:', error);
          alert('Failed to submit answers. Please try again.');
        },
      });
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  isChecked(answerId: string): boolean {
    return this.checkedAnswers.has(answerId);
  }

  handleSelection(answerId: string): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];

    if (currentQuestion.questionType === 'SINGLE_CHOICE') {
      this.checkedAnswers.clear();
      this.checkedAnswers.add(answerId);
    } else {
      if (this.checkedAnswers.has(answerId)) {
        this.checkedAnswers.delete(answerId);
      } else {
        this.checkedAnswers.add(answerId);
      }
    }
  }

  getLabelClasses(answerId: string): string {
    return `answer-label ${this.isChecked(answerId) ? 'checked' : 'unchecked'}`;
  }

}
