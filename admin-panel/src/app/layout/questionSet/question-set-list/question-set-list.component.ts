import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionSetService } from '@services/questionSet/question-set.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-set-list',
  templateUrl: './question-set-list.component.html',
  styleUrls: ['./question-set-list.component.scss'],
})
export class QuestionSetListComponent implements OnInit {
  selectedRow: any = {};
  sets: any;
  totalSets: any;
  page = 1;
  pageSize = 5;
  search: any = '';
  visibility: any = {};

  constructor(
    private router: Router,
    private questionSetService: QuestionSetService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllSets();
  }

  getAllSets() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.questionSetService.getAllQuestionSet(params).subscribe(
      (success) => {
        console.log('Question Sets', success);
        this.sets = success?.result?.data;
        this.totalSets = success?.result?.totalCount;
        this.spinner.hide();
        this.sets.forEach((set) => {
          this.visibility[set._id] = set.isVisible;
        });
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something went Wrong!');
      }
    );
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAllSets();
  }

  navigateTo(path, id) {
    if (id) {
      this.router.navigate([path], { queryParams: { id } });
    } else {
      this.router.navigate([path]);
    }
  }

  switchVisibility(row) {
    this.selectedRow = row;
    let seminarInfo = {
      seminarId: row.seminarId,
    };
    this.spinner.show();
    this.questionSetService.changeSetVisibility(row._id, seminarInfo).subscribe(
      (success) => {
        // console.log('visibility', success);
        this.spinner.hide();
        this.toastService.success(success.result.message);

        this.sets.forEach((set) => {
          this.visibility[set._id] = set._id === row._id;
        });
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something Went Wrong');
      }
    );
  }

  refreshList(title) {
    this.search = title == 'clear' ? '' : this.search;
    this.getAllSets();
  }

  open(s, content) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }

  deleteQuestionSet(id) {
    this.questionSetService.deleteSetById(id).subscribe(
      (success) => {
        this.getAllSets();
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
