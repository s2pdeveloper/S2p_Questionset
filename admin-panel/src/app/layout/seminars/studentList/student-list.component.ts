import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeminarService } from '../../../services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: any;
  totalStudents: any;
  seminarId: any;
  page = 1;
  pageSize = 5;

  constructor(
    private actRoutes: ActivatedRoute,
    private seminarService: SeminarService,
    private location: Location,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      this.seminarId = params.id;
      if (params.id) {
        this.getAllStudents(params.id);
      }
    });
  }

  getAllStudents(id) {
    this.spinner.show();
    let params = {
      id: id,
      page: this.page,
      pageSize: this.pageSize,
    };
    this.seminarService.getAllSeminarStudents(params).subscribe(
      (success) => {
        console.log('Student List in Seminar', success);
        this.students = success?.result?.rows;
        this.totalStudents = success?.result?.count;
        console.log('Students++++++', this.students);
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something Went Wrong!');
      }
    );
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAllStudents(this.seminarId);
  }

  goBack() {
    this.location.back();
  }

  excelDownload() {
    this.spinner.show();
    this.seminarService.downloadExcel(this.seminarId).subscribe(
      (success: any) => {
        console.log(success.result);


        let UintArray = new Uint8Array(success.result.excelData.data);
        let blob = new Blob([UintArray]);
        saveAs(blob, `${success.result.collageName}.xlsx`);
        this.spinner.hide();
        this.toastService.success('Excel Downloaded');
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Something Went Wrong!');
      }
    );
  }
}
