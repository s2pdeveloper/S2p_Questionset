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
  questions: any;
  totalQuestion: any;
  page: number = 1;
  pageSize: number = 5;
  search: any = '';
  selectedRow: any = {};
  setId: any = null;

  constructor(
    private router: Router,
    private actRoutes: ActivatedRoute,
    private questionService: QuestionsService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    // console.log("in question list");
  }

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      this.setId = params.id;
      // console.log('set id in list', this.setId, params.id);
      if (this.setId) {
        this.getQuestionsOfSet(this.setId);
      }
    });
  }

  getQuestionsOfSet(id) {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.questionService.getSetQuestions(id, params).subscribe(
      (success) => {
        this.spinner.hide();
        console.log('Questions', success);
        this.questions = success?.result?.data;
        this.totalQuestion = success?.result?.totalCount;
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something Went Wrong');
      }
    );
  }

  navigateTo(path, s_id, q_id, action) {
    if (q_id) {
      this.router.navigate([path], { queryParams: { s_id, q_id, action } });
    } else {
      this.router.navigate([path], { queryParams: { s_id, action } });
    }
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getQuestionsOfSet(this.setId);
  }

  open(s, content) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }

  deleteQuestion(id){
    this.questionService.deleteQuestionById(id).subscribe(
      (success) => {
        console.log(success);
        this.getQuestionsOfSet(this.setId);
        this.selectedRow = {};
        this.modalService.dismissAll();
        this.toastService.success(success.result.message);
      },
      (error) => {
        this.selectedRow = {};
        this.modalService.dismissAll();
        this.toastService.error('Something went Wrong!');
      }
    );
  }
}
