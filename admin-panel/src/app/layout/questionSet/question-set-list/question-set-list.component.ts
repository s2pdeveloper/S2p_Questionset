import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionSetService } from '@services/questionSet/question-set.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-set-list',
  templateUrl: './question-set-list.component.html',
  styleUrls: ['./question-set-list.component.scss'],
})
export class QuestionSetListComponent implements OnInit {
  sets: any;
  totalSets: any;
  page = 1;
  pageSize = 5;
  search: any = '';

  constructor(
    private router: Router,
    private questionSetService: QuestionSetService,
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
        console.log(success);
        this.sets = success?.result?.data;
        this.totalSets = success?.result?.totalCount;
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something went Wrong!');
      }
    );
  }

  navigateTo(path, id) {
    if (id) {
      this.router.navigate([path], { queryParams: { id } });
    } else {
      this.router.navigate([path]);
    }
  }

  
}
