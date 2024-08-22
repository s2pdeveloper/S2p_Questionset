import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '@services/feedback/feedback.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss'],
})
export class FeedBackListComponent implements OnInit {
  selectedRow: any = {};
  feedbacks: any = [];
  search: any = '';
  page = 1;
  pageSize = 10;
  totalFeedbacks: number;

  constructor(
    private router: Router,
    private feedbackService: FeedbackService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.feedbackService.getAllFeedback(params).subscribe(
      (success) => {
        console.log('All Feedback', success);
        this.feedbacks = success?.result?.data;
        this.totalFeedbacks = success?.result?.totalCount;
        console.log('All feedback', this.feedbacks);
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something went Wrong!');
      }
    );
  }

  navigateTo(path, id, action) {
    if (id) {
      this.router.navigate([path], { queryParams: { id, action } });
    } else {
      this.router.navigate([path], { queryParams: { action } });
    }
  }

  refreshList(title) {
    this.search = title == 'clear' ? '' : this.search;
    this.getAll();
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll();
  }

  open(f, content) {
    this.selectedRow = f;
    this.modalService.open(content, { centered: true });
  }

  delete(id) {
    this.feedbackService.deleteFeedback(id).subscribe(
      (success) => {
        this.getAll();
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
