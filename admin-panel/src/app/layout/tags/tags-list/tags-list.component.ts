import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TagsService } from '@services/tags/tags.service';
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
  tags: any = [];
  search: any = '';
  page = 1;
  pageSize = 10;
  totalTags: number;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private tagService: TagsService,
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
    this.tagService.getAllTags(params).subscribe(
      (success) => {
        console.log('All Tags', success);
        this.tags = success?.result?.data;
        this.totalTags = success?.result?.totalCount;
        console.log('All Tags', this.tags);
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

  open(tag, content) {
    this.selectedRow = tag;
    this.modalService.open(content, { centered: true });
  }

  delete(id) {}
}
