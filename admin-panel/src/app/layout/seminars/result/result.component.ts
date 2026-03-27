import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeminarService } from '../../../services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionSetService } from '../../../services/questionSet/question-set.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  students: any[] = [];
  totalStudents: number = 0;
  seminars: any;
  selectedRow: any = {};
  sets: any;
  totalSets: any;
  page = 1;
  pageSize = 5;
  search: any = '';
  visibility: any = {};
  selectedSeminarId: string = '';
  selectedQuestionSetId: string = '';
  constructor(
    private seminarService: SeminarService,
    private questionSetService: QuestionSetService,
    private router: Router,
    private actRoutes: ActivatedRoute,
    private location: Location,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.getstudentResult();
    this.getSeminarList();
    this.getAllSets();
    // this.actRoutes.queryParams.subscribe((params) => {
    //   this.seminarId = params.id;
    //   if (params.id) {
    //     this.getById(params.id);
    //   }
    // });
  }

  getStatusClass(status: string) {
    return status === 'PASS' ? 'text-success' : 'text-danger';
  }

  getSeminarList() {
    this.seminarService.allSeminarList().subscribe((success: any) => {
      console.log(success);
      this.seminars = success?.result?.data;
      console.log('this.seminars', this.seminars);

      // this.totalSeminars = success?.result?.
    });
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
      },
    );
  }

  getstudentResult() {
    if (!this.selectedSeminarId || !this.selectedQuestionSetId) {
      return;
    }

    const payload = {
      seminarId: this.selectedSeminarId,
      questionSetId: this.selectedQuestionSetId,
    };
    this.seminarService
      .getStudentDetailedResult(payload)
      .subscribe((success: any) => {
        console.log(success);
        this.students = success.students;
        this.totalStudents = success.totalStudents;
      });
  }
}
