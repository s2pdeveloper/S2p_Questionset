import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionSetService } from '@services/questionSet/question-set.service';
import { SeminarService } from '@services/seminar/seminar.service';
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
  seminars: any;
  selectedSeminarId: string;

  constructor(
    private router: Router,
    private questionSetService: QuestionSetService,
    private seminarService: SeminarService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllSets();
    this.getSeminarList();
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
        // this.sets.forEach((set) => {
        //   this.visibility[set._id] = set.isVisible;
        // });
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something went Wrong!');
      }
    );
  }

  getSeminarList() {
    this.seminarService.allSeminarList().subscribe(
      (success) => {
        // console.log(success);
        this.seminars = success?.result?.data;
        // console.log('this.seminars', this.seminars);

        // this.totalSeminars = success?.result?.
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
    this.spinner.show();
    this.selectedRow = row;
    let seminarInfo = {
      seminarId: row.seminarId,
    };
    this.questionSetService.changeSetVisibility(row._id, seminarInfo).subscribe(
      (success) => {
        // console.log('visibility', success);
        this.toastService.success(success.result.message);

        // this.sets.forEach((set) => {

        // });
        // row.isVisible = !row.isVisible;
        this.getAllSets();
        this.spinner.hide();
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
    this.spinner.show();
    this.questionSetService.deleteSetById(id).subscribe(
      (success) => {
        this.getAllSets();
        this.selectedRow = {};
        this.modalService.dismissAll();
        this.spinner.hide();
        this.toastService.success(success.result.message);
      },
      (error) => {
        this.selectedRow = {};
        this.modalService.dismissAll();
        this.spinner.hide();
        this.toastService.error('Something went Wrong!');
      }
    );
  }

  copyQuestionSet(id) {
    this.spinner.show();
    let payload = {
      seminarId: this.selectedSeminarId,
      questionSetId: id,
    };
    this.questionSetService.duplicateQuestionSet(payload).subscribe(
      (success) => {
        console.log('Create Duplicate', success);
        this.getAllSets();
        this.selectedSeminarId = null;
        this.selectedRow = {};
        this.modalService.dismissAll();
        this.spinner.hide();
        this.toastService.success('Set Duplicated Successfully!');
      },
      (error) => {
        this.selectedRow = {};
        this.modalService.dismissAll();
        this.spinner.hide();
        this.toastService.error('Something went Wrong!');
      }
    );
  }
}
