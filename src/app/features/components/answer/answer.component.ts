import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/question.model';
import {ActivatedRoute} from '@angular/router';
import {AnswerService} from '../../services/answer.service';

@Component({
  selector: 'app-answer',
  imports: [],
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent implements OnInit {
  questionId!: number;
  question!: Question;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.questionId = +params['id'];
      this.loadAnswer();
    });
  }

  loadAnswer(){
    this.answerService.getAnswersOfQuestionById(this.questionId).subscribe({
      next:(data)=> {
        this.question = data;
        console.log(this.question)
        },
      error: (error) => {
        console.log("some erroor hnaa", error);
      }
    })
  }

}
