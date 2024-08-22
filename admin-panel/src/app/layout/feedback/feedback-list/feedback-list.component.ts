import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss'],
})
export class FeedBackListComponent implements OnInit {
  // selectedRow: any = {};
  // users: any = [];
  // search: any = '';
  // page = 1;
  // pageSize = 10;
  // collection: number = 0;
  // // pages: number = 1;
  // userDetails: any = {};

  // constructor(
  //   private userService: UserService,
  //   private router: Router,
  //   private storageService: StorageService,
  //   private modalService: NgbModal,
  //   private toastService: ToastrService,
  //   private spinner: NgxSpinnerService
  // ) {}

  ngOnInit(): void {
 
  }

  // getAll() {
  //   this.spinner.show();
  //   let params = {
  //     page: this.page,
  //     pageSize: this.pageSize,
  //     search: this.search,
  //   };
  //   this.userService.getAllUsers(params).subscribe(
  //     (success) => {
  //       this.users = success.data;
  //       this.collection = success.count;
  //       this.spinner.hide();
  //     },
  //     (error) => {
  //       this.spinner.hide();
  //       this.toastService.error('Something Went Wrong!');
  //     }
  //   );
  // }

  // navigateTo(path, id) {
  //   if (id) {
  //     this.router.navigate([path], { queryParams: { id } });
  //   } else {
  //     this.router.navigate([path]);
  //   }
  // }

  // refreshList(title) {
  //   this.search = title == 'clear' ? '' : this.search;
  //   this.getAll();
  // }

  // onChangePage(pageNo) {
  //   if (pageNo > 0) {
  //     this.page = pageNo;
  //   }
  //   this.getAll();
  // }

  // open(u, content) {
  //   this.selectedRow = u;
  //   this.modalService.open(content, { centered: true });
  // }

  // deleteUser(id) {
  //   this.userService.deleteUser(id).subscribe(
  //     (success) => {
  //       this.getAll();
  //       this.selectedRow = {};
  //       this.modalService.dismissAll();
  //       this.toastService.success(success.message);
  //     },
  //     (error) => {
  //       this.selectedRow = {};
  //       this.modalService.dismissAll();
  //     }
  //   );
  // }
}
