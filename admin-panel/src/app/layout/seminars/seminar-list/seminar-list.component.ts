import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarService } from '../../../services/seminar/seminar.service';


@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.scss']
})
export class SeminarListComponent implements OnInit {

  seminarDetails: any = {};

  constructor(private router: Router, private seminarService: SeminarService) { }

  ngOnInit(): void {
    // this.seminarDetails  = 
  }

}
