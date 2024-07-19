import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarService } from '../../../services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.scss'],
})
export class SeminarListComponent implements OnInit {
  selectedRow: any = {};
  seminarDetails: any = {};
  seminars: any;
  page = 1;
  pageSize = 5;
  search: any = '';
  totalSeminars: any;
  qrCodeUrl: string;
  baseUrl:String;

  constructor(
    private router: Router,
    private seminarService: SeminarService,
    private toastService: ToastrService,
    private modalService: NgbModal,
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
    this.seminarService.getAllSeminars(params).subscribe(
      (success) => {
        console.log('Seminars', success);
        this.seminars = success?.result?.data;
        // console.log(this.seminars);
        this.totalSeminars = success.result.totalCount;
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
    this.getAll();
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

  open(s, content) {
    console.log('your Qr code function runs from actual');
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }

  showQr(s, content) {
    this.baseUrl=
     
    this.selectedRow = s;
    this.qrCodeUrl = `${environment.QrCodeUrl}/login/${s._id}`;
    console.log('your Qr code function runs',this.qrCodeUrl);
    this.modalService.open(content, { centered: true });
  }

  deleteSeminarById(id) {
    this.seminarService.deleteSeminar(id).subscribe(
      (success) => {
        console.log(success);
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
