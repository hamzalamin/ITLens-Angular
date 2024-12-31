import {Component, OnInit} from '@angular/core';
import {Subject} from '../../../survey/model/subject.model';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {QuestionService} from '../../service/question.service';

@Component({
  selector: 'app-question',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  subjectId!: number;
  subject!: Subject;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subjectId = +params['id'];
      this.loadSubject();
    });
  }

  loadSubject() {
    this.questionService.getQuestionsOfSubjectById(this.subjectId).subscribe({
      next:(data) => {
        this.subject = data;
        console.log(this.subject)
      },
      error: (error) => {
        console.log("some eroor here", error);
      }
    });
  }
}
