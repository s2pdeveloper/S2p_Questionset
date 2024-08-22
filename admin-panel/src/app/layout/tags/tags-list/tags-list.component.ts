import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss'],
})
export class TagsListComponent implements OnInit {
  selectedRow: any = {};
  feedbacks: any = [];
  search: any = '';
  page = 1;
  pageSize = 10;
  totalFeedbacks: number;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
   
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
    
  }
}
