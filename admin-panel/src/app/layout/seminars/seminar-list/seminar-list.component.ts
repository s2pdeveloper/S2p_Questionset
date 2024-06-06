import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarService } from '../../../services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.scss'],
})
export class SeminarListComponent implements OnInit {
  seminarDetails: any = {};
  seminars: any;
  page = 1;
  pageSize = 10;
  search: any = '';
  totalSeminars: any;

  constructor(
    private router: Router,
    private seminarService: SeminarService,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.spinner.show();
    let params = {
      page: this.page ,
      pageSize: this.pageSize,
      search: this.search,
    }
    this.seminarService.getAllSeminars(params).subscribe(
      (success) => {
        // console.log(success);
        this.seminars = success.result[0].data;
        this.totalSeminars = success.result[0].metadata[0].total;
        this.spinner.hide();
        // console.log(this.seminarDetails);
        // console.log(this.totalSeminars);
      },
      (error) =>{
        this.spinner.hide();
        this.toastService.error('Something Went Wrong!');
      }
    )
  }
}
