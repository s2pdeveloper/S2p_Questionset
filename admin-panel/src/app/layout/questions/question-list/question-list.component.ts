import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from '../../../services/questions/questions.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  constructor(
    private router: Router,
    private actRoutes: ActivatedRoute,
    private questionService: QuestionsService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    console.log("in question list");
    
  }

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      if (params.id) {
        this.getQuestionsOfSet(params.id);
      }
    });
  }
  getQuestionsOfSet(id) {
    this.spinner.show();
    this.questionService.getSetQuestions(id).subscribe((success) => {
      this.spinner.hide();
      console.log('Questions', success);
    });
  }
}
