import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.scss']
})
export class SeminarListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
